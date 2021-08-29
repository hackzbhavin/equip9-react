import React, { Component, Fragment,useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    TextField,
    MuiThemeProvider
  } from "@material-ui/core";

// import NameField from '../NameInput';
// import PasswordInputField from '../PasswordInput';

const FinalStepOperatorPartner = ({nextStep,prevStep, handleChange, values}) => {
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }
  const back = e => {
    e.preventDefault();
    prevStep();
  };

return(

   
        <div className='mx-auto'>
  
  <MuiThemeProvider>
        <AppBar style={{ background: "black", color:"#f4af0c" }} position="sticky">
          <Toolbar title="Enter Personal Information">
            <Typography color="inherit" variant="title">
                Equipment Owner
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
      
      
      <div class='row'>
      <div class='col'>

       <TextField id="outlined-basic" 
       label="First Name" 
       variant="outlined" 
       onChange={handleChange('firstName')}
       defaultValue={values.firstName}
       />
      </div>
      <div class='col'>
      <TextField id="outlined-basic" 
       label="Last Name" 
       variant="outlined" 
       onChange={handleChange('lastName')}
       defaultValue={values.lastName}
       />
      </div>
      </div>


      <label class="mb-2 mt-3"><h6 class="mb-0 text-sm">Password</h6></label> 
      <input 
      class='mb-2 rounded'  
      type="password" 
      name="password" 
      onChange={handleChange('password')}
      defaultValue={values.password}
      placeholder="Enter password"/> 


      </MuiThemeProvider> 

<center>   
    <br />
        <br />
        <div className=' mx-auto'>
        <Button
          style={{
            background: 'linear-gradient(45deg, black 30%, black 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',            }}
          label="Continue"
          onClick={Continue}
        >
          Next
        </Button>
        </div>
        </center>

        </div>
    );
  
}

export default FinalStepOperatorPartner;
