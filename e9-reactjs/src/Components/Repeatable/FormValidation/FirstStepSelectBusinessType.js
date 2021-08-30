import React, { Component, useEffect, useState, Fragment } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography
} from "@material-ui/core";
import Axios from "axios";



import { API } from '../../../Server';
import "../../../Assets/Css/custom.css";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';


const FirstStepSelectBusinessType = ({ nextStep, handleChange, values }) => {

  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const [business, setBusiness] = useState('')
  const [businessType, setBusinessType] = useState([])



  useEffect(() => {
    Axios.get(`${API}get/BusinessType`).then((response) => {
      // console.log(response.data);
      setBusinessType(response.data);
    })



  })


  return (


    <Fragment>
      <AppBar style={{ background: "black", color: "#f4af0c" }} position="">
        <Toolbar title="Enter User Details">
          <Typography variant="title">
            Choose Business Type
          </Typography>
        </Toolbar>
      </AppBar>

      <form >
        <div>

          <h5 class='text-dark'>Partner</h5>

          {businessType.filter(businessType => businessType.BusinessTypeValue.toLowerCase().includes("partner")).map(filteredToPartner => (


            <div class="radiobtn">
              <input
                type="radio"
                id={filteredToPartner.BusinessTypeValue}
                name="businessType"
                onChange={handleChange('businessType')}

                defaultValue={values.businessType}

                value={filteredToPartner.BusinessTypeId}
              />


              <label for={filteredToPartner.BusinessTypeValue}><PermIdentityIcon />  {filteredToPartner.BusinessTypeValue}</label>
            </div>
          ))}
          <hr />

          <h5 class='text-dark '>Owner</h5>
          {businessType.filter(businessType => businessType.BusinessTypeValue.toLowerCase().includes("owner")).map(filteredToPartner => (

            <div class="radiobtn ">
              <input type="radio" 
              id={filteredToPartner.BusinessTypeValue}
                name="businessType"
                onChange={handleChange('businessType')}
 
                value={filteredToPartner.BusinessTypeId} 
                defaultValue={values.businessType}

                
                />
              <label for={filteredToPartner.BusinessTypeValue}><PermIdentityIcon /> {filteredToPartner.BusinessTypeValue}</label>
            </div>

          ))}



          <hr />

          <h5 class='text-dark'>Other</h5>
          {businessType.filter(businessType => businessType.BusinessTypeValue.toLowerCase().includes("guest")).map(filteredToPartner => (

            <div class="radiobtn">
              <input type="radio" id={filteredToPartner.BusinessTypeValue}
                name="businessType" onChange={(e) => { setBusiness(e.target.values) }} value={filteredToPartner.BusinessTypeId} 

                />
              <label for={filteredToPartner.BusinessTypeValue}>{filteredToPartner.BusinessTypeValue}</label>
              
            </div>
          ))}
        </div>



      </form>







      <br />
      <br />
      <div className='row mx-auto'>
        <Button
          style={{
            marginTop: "5px",
            background: 'linear-gradient(45deg, black 30%, black 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
          }}
          onClick={ Continue }
          type="submit"
          fullWidth
          variant="contained"
          label="Continue"
    
        >
          Continue
        </Button>
      </div>
    </Fragment>
  );
}


export default FirstStepSelectBusinessType;
