import React, { Component,useEffect, Fragment,useState } from "react";
import { AppBar, Button, Toolbar,TextField, Typography } from "@material-ui/core";
// import PhoneNumber from "../PhoneNumber";
import PhoneInput from 'react-phone-number-input'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import Axios from 'axios';
import { API } from '../../../Server';

import KeyboardBackspaceTwoToneIcon from '@material-ui/icons/KeyboardBackspaceTwoTone';

import {Modal} from "react-bootstrap";
import OtpField from "../Otp";


const ThirdStepPhoneNumber = ({nextStep,prevStep, handleChange, values}) => {
  console.log(" ==== THIRD STEP PHONE NUMBER ==== ")
  console.log(values)
  
  // Go to Next Step
  const Next = e => {
    e.preventDefault();
    nextStep();
  }
  // Go to Previous
  const Previous = e => {
    e.preventDefault();
    prevStep();
  };

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
      minWidth: 220,
      display:"inline"
    },
    selectEmpty: {
      width:100,
      marginTop: theme.spacing(),
    },
  }));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  const { phonenumber } = values
  const classes = useStyles();

 

  const [countryCode, setCountryCode] = useState([])
  const [numberExist, setNumberExist] = useState([])



  useEffect(() => {
    Axios.get(`${API}get/CountryCode`).then((response) => {
      // console.log(response.data);
      setCountryCode(response.data);
    })



  },[])

  
  useEffect(() => {
  Axios.get(`${API}get/ExisitingPhoneNumber/${values.phonenumber}`).then((resp)=>{
    console.log(resp.data);
    setNumberExist(resp.data)
  })
  },[])


  
    return (
      <Fragment>
          <KeyboardBackspaceTwoToneIcon 
          onClick={Previous}/>


        {/* <PhoneNumber /> */}

        <h6 class="mb-2 mt-4 text-sm">Phone Number</h6>
    <div class="input-group mb-3 ">
    <FormControl variant="outlined" className={classes.formControl} display="inline">
        <InputLabel id="demo-simple-select-outlined-label">Code</InputLabel>
        <Select
        style={ {width:80}}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={handleChange}
          label=""
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {countryCode.map((c)=>{
            return(
            <MenuItem value={c.CountryIsdCode}>{c.CountryIsdCode}</MenuItem>
            )
          })}
          
        </Select>
        <TextField
          id="outlined-number"
          onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
          onChange={handleChange('phonenumber')}
          defaultValue={values.phonenumber}
          type="number"
          // fullWidth 
          placeholder="9999911111"
          variant="outlined"
          
        />

      </FormControl>




    </div>

        <div class="row px-3 mb-4">
                        <p className='terms'>By clicking submit I agree to <a href='' className='text-warning'>Terms and Conditions</a></p>
                    </div>
        <div className='row mx-auto'>






        {(() => {
 

              if (values.phonenumber.length == 10){
                  return (
                    <Button
          style={{
            marginTop:"20px",
            background: 'linear-gradient(45deg, black 30%, black 90%)',
            border: 0,
            borderRadius: 5,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
          }}
          label="Submit"

          
          onClick={handleShow}
        >
          Submit
        </Button>
                  )
                  }
              
              return null;
            })()}

     
        </div>
{/* Modal */}



   

<Modal show={show} onHide={handleClose} animation={false} backdrop="static"   keyboard={false}>
        <Modal.Header >
        <AppBar style={{ background: "black", color:"#f4af0c" }} position="sticky">
          <Toolbar title="Enter User Details">
            <Typography color="inherit" variant="title" closeButton>
              Please Enter Your Received Otp
            </Typography>
          </Toolbar>
        </AppBar>
        </Modal.Header>
        <Modal.Body> 
       
    { numberExist.map((val)=>{

      return (
      
          <h4>Sorry Number Already Exist</h4>
      )
      }
    )}
    


          <OtpField />
          <center>
            <Button 
            
              style={{
                marginTop:"20px",
                background: 'linear-gradient(45deg, black 30%, black 90%)',
                border: 0,
                borderRadius: 5,
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                color: 'white',
                height: 48,
                padding: '0 30px',
              }}
              label="Submit"
              onClick={Next}
           
            > Next </Button>
            </center>
        </Modal.Body>
        
       
        </Modal>

      </Fragment>
    );
  }


export default ThirdStepPhoneNumber;
