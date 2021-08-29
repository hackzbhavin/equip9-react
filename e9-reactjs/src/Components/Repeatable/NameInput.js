import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



export default function NamePassword() {

  return (
      <div class='row justify-content-center'>
      <div class='col'>
          
      <TextField id="outlined-basic" label="First Name" variant="outlined" />
      </div>
      <div class='col'>
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      </div>
      </div>
  );
}