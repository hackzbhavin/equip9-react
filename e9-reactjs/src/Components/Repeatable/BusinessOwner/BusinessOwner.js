import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    MuiThemeProvider
  } from "@material-ui/core";

import NameField from '../NameInput';
import PasswordInputField from '../PasswordInput';


export default function BusinessOwner() {
    return (
        <div>
                <MuiThemeProvider>
        <AppBar style={{ background: "black", color:"#f4af0c" }} position="sticky">
          <Toolbar title="Enter Personal Information">
            <Typography color="inherit" variant="title">
                Business Owner
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
      
      <NameField />

      <PasswordInputField/>
      
       
     
      </MuiThemeProvider> 
        </div>
    )
}
