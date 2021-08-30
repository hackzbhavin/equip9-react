import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    TextField,
    MuiThemeProvider
  } from "@material-ui/core";
  import Axios from 'axios';
  import { API } from '../../../Server';


const FinalStepOperatorPartner = ({prevStep, handleChange, values}) => {
  console.log(" ==== FINAL STEP PHONE NUMBER ==== ")
  console.log(values)


  const back = e => {
    e.preventDefault();
    prevStep();
  };

  const { deviceType, businessType,phonenumber, password, firstName, lastName } = values


  const onSubmitPress = () => {
    if (values.businessType == 5) {
  
      Axios.post(`${API}post/OperatorPartner`, {
        businessTypeId: businessType, 
        deviceTypeId: deviceType, 
        phonenumber: phonenumber,
        password: password,
        firstName: firstName,
        lastName: lastName,
      })
    }
  }

return(

   
        <div className='mx-auto'>
  
  <MuiThemeProvider>
        <AppBar style={{ background: "black", color:"#f4af0c" }} position="sticky">
          <Toolbar title="Enter Personal Information">
            <Typography color="inherit" variant="title">
                Operator Partner
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
          onClick={onSubmitPress}
        >
          Submit
        </Button>
        </div>
        </center>

        </div>
    );
  
}

export default FinalStepOperatorPartner;
