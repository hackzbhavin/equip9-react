import React,{useState} from "react";
import validator from 'validator'

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    TextField,
    FormHelperText,
    MuiThemeProvider
  } from "@material-ui/core";
  import Axios from 'axios';
  import { API } from '../../../Server';


const FinalStepOperatorPartner = ({prevStep, handleChange, values}) => {
  console.log(" ==== FINAL STEP OPERATOR PARTNER ==== ")
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

  const [errorMessage, setErrorMessage] = useState('')
  
  const validate = (value) => {
  
    if (validator.isStrongPassword(value, {
      minLength: 6
    })) {
      setErrorMessage('Your Password is Good to Go')
    } else {
      setErrorMessage('Password is Less Than 6 Characters')
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
       required 
       />
      </div>
      <div class='col'>
      <TextField id="outlined-basic" 
       label="Last Name" 
       variant="outlined" 
       onChange={handleChange('lastName')}
       defaultValue={values.lastName}
       required 
       />
      </div>
      </div>


      <label class="mb-2 mt-3"><h6 class="mb-0 text-sm">Password</h6></label> 
      <input 
      class='mb-2 rounded'  
      type="password" 
      name="password" 
      onInput={(e) => validate(e.target.value)}
      onChange={handleChange('password')}
minLength="6"
      defaultValue={values.password}
      placeholder="Enter password"
      
      required
      /> 

<span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>
      </MuiThemeProvider> 

<center>   
    <br />
        <br />

        {(() => {
      

              if (values.password !== "" && values.lastName !="" && values.firstName !=""){
                  return (
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
                  )
                  }
              
              return null;
            })()}

        </center>

        </div>
  
    );
  
}

export default FinalStepOperatorPartner;
