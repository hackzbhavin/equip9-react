import React from "react";
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
  import Axios from 'axios';
  import { API } from '../../../Server';


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



const FinalStepEquipmentOwner = ({handleChange, values}) => {
  console.log(" ==== FINAL STEP EQUIPMENT OWNER ==== ")
  console.log(values)

  const [val, setVal] = React.useState({

    password: '',
    showPassword: false,
  });

  const classes = useStyles();
  
  const handleClickShowPassword = () => {
    setVal({ ...val, showPassword: !val.showPassword });
  };


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { deviceType, businessType, taxNumber, manageStaff, companyName, phonenumber, password, firstName, lastName } = values

  const onSubmitPress = () => {

    if (values.businessType == 2 ) {
  
  
      Axios.post(`${API}post/EquipmentOwner`, {
        businessTypeId: businessType,
        deviceTypeId: deviceType,
        phonenumber: phonenumber,
        password: password,
        taxNumber: taxNumber,
        manageStaff: manageStaff,
        companyName: companyName,
        firstName: firstName,
        lastName: lastName,
      }
      )
    }
  }


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


        <TextField id="outlined-basic" 
                    label="Company Name" 
                    variant="outlined" 
                    onChange={handleChange('companyName')}
                    defaultValue={values.companyName}
                    fullWidth
                    />

        {(() => {
            console.log(values);
            console.log(values.manageStaff);

              if (values.manageStaff === "Yes"){
                  return (
                    <div>

          
                    <TextField id="outlined-basic" 
                    label="Tax Number - GSTIN" 
                    variant="outlined" 
                    onChange={handleChange('taxNumber')}
                    defaultValue={values.taxNumber}
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
          onClick={onSubmitPress}
        >
          Submit
        </Button>
        </div>
        </center>

        </div>
    );
  
}

export default FinalStepEquipmentOwner;
