import React from 'react'
import { Container, Grid, List, ListItem, ListItemText, Button } from '@material-ui/core'
import Axios from 'axios';
import { API } from '../../../Server';

const Confirmation = ({ prevStep, nextStep, values }) => {
  console.log(values);
  const {deviceType, businessType,companyName, phonenumber, password, firstName, lastName } = values
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  const onSubmitPress = () => {
    if(values.businessType == 5){

    Axios.post(`${API}post/BusinessTypeUserCredentials`, {
      businessTypeId:businessType, deviceTypeId: deviceType,phonenumber:phonenumber,
    password:password ,
    firstName:firstName,
    lastName:lastName,
  }
  )
  }else if(values.businessType == 1)
  Axios.post(`${API}post/BusinessTypeUserCredentials`, {
    businessTypeId:businessType, deviceTypeId: deviceType,
    phonenumber:phonenumber,
  password:password ,
  companyName:companyName,
  firstName:firstName,
  lastName:lastName,
}
)

    
  }

  console.log(onSubmitPress);
  return (
    <Container  component="main" maxWidth="xs">
      <div>
        <List>
      
          <ListItem>
            <ListItemText primary="Business Equipment Id" secondary={businessType}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone" secondary={phonenumber}/>
          </ListItem>
        
          <ListItem>
            <ListItemText primary="deviceType" secondary={deviceType}/>
          </ListItem>
        </List>

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button 
              onClick={ Previous }
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Previous
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button 
              onClick={onSubmitPress}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Confirm 
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default Confirmation
