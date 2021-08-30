import React, { Component, Fragment,useState } from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
// import PhoneNumber from "../PhoneNumber";
import PhoneInput from 'react-phone-number-input'

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

  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const  state = {
    isOpen: false
  };


    return (
      <Fragment>
          <KeyboardBackspaceTwoToneIcon 
          onClick={Previous}/>


        {/* <PhoneNumber /> */}

        <h6 class="mb-2 mt-4 text-sm">Phone Number</h6>
    <div class="input-group mb-3">

      <input
        placeholder="Example: 9991199911"
        // value={value}
        onChange={handleChange('phonenumber')}
        defaultValue={values.phonenumber}
        type='number'
        class="rounded inputphonenumber"
        />
    </div>

        <div class="row px-3 mb-4">
                        <p className='terms'>By clicking submit I agree to <a href='' className='text-warning'>Terms and Conditions</a></p>
                    </div>
        <div className='row mx-auto'>



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
          onClick={ handleShow}
        >
          Submit
        </Button>
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
