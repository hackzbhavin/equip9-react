import React, { Component, Fragment,useState } from "react";
import clsx from 'clsx';

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    TextField,
    MuiThemeProvider,
    FormControl,
    makeStyles,OutlinedInput,InputAdornment,InputLabel,IconButton
  } from "@material-ui/core";
  import Visibility from '@material-ui/icons/Visibility';
  import VisibilityOff from '@material-ui/icons/VisibilityOff';
  
// import NameField from '../NameInput';
// import PasswordInputField from '../PasswordInput';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    // marginTop:20,
    // margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '50ch',
  },
}));



const FinalStepBusinessOwner = ({nextStep,prevStep, handleChange, values}) => {
  const [val, setVal] = React.useState({

    password: '',
    showPassword: false,
  });

  const Continue = e => {
    e.preventDefault();
    nextStep();
  }
  const back = e => {
    e.preventDefault();
    prevStep();
  };

  const classes = useStyles();
  
  const handleClickShowPassword = () => {
    setVal({ ...val, showPassword: !val.showPassword });
  };


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };





return(

   
        <div className='mx-auto'>
  
  <MuiThemeProvider>
        <AppBar style={{ background: "black", color:"#f4af0c" }} position="sticky">
          <Toolbar title="Enter Personal Information">
            <Typography color="inherit" variant="title">
                Business Owner
            </Typography>
          </Toolbar>
        </AppBar>
        <br />


        {(() => {
            console.log(values);

              if (values.manageStaff.toLowerCase === "no".toLowerCase){
                  return (
                    <TextField id="outlined-basic" 
                    label="Company Name" 
                    variant="outlined" 
                    onChange={handleChange('companyName')}
                    defaultValue={values.companyName}
                    fullWidth
                    />
                  )
              }else{
                return(
                  <div>

                  
                  <TextField id="outlined-basic" 
                  label="Company Name" 
                  variant="outlined" 
                  onChange={handleChange('taxNumber')}
                  defaultValue={values.companyName}
                  className='mt-3'
                  fullWidth
                  />

                <TextField id="outlined-basic" 
                  label="Tax Number - GSTIN" 
                  variant="outlined" 
                  onChange={handleChange('companyName')}
                  defaultValue={values.companyName}
                  placeholder=""
                  className='mt-3'
                  fullWidth
                  />



      
                  </div>
                )

              }
              
              return null;
            })()}

      <div class='row mt-3'>




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


      {/* <label class="mb-2 mt-3"><h6 class="mb-0 text-sm">Password</h6></label> 
      <input 
      class='mb-2 rounded'  
      type="password" 
      name="password" 
      onChange={handleChange('password')}
      defaultValue={values.password}
      placeholder="Enter password"/>  */}

<FormControl className={clsx(classes.margin, classes.textField), "mt-3"} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={val.showPassword ? 'text' : 'password'}
      defaultValue={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {val.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>

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

export default FinalStepBusinessOwner;
