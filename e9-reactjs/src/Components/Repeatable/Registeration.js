import React, { Component } from "react";
import {
  isBrowser,
  isMobile
} from "react-device-detect";


import FirstStepSelectBusinessType from "./FormValidation/FirstStepSelectBusinessType";
import SecondStepManageStaff from "./FormValidation/SecondStepManageStaff";
import ThirdStepPhoneNumberAndOtp from "./FormValidation/ThirdStepPhoneNumber";

import FinalStepOperatorPartner from "./FormValidation/FinalStepOperatorPartner";
import FinalStepBusinessOwner from "./FormValidation/FinalStepBusinessOwner";
import FinalStepMaintenancePartner from "./FormValidation/FinalStepMaintenancePartner";
import FinalStepEquipmentOwner from "./FormValidation/FinalStepEquipmentOwner";



import Confirmation from "./FormValidation/Confirmation";



export class UserForm extends Component {
  state = {
    step: 1,
    businessType:"",
    phonenumber: "",
    manageStaff:"",
    taxNumber:"",
    companyName:"",
    firstName:"",
    lastName:"",
    password:"",
    deviceType:"",

    };





  // Go to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  firstStep = () => {
    this.setState({
      step: 1
    });
  };
  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
const { step } = this.state;

const { deviceType, businessType,manageStaff,taxNumber,companyName, phonenumber, password, firstName, lastName } = this.state;
const values = {deviceType, businessType,manageStaff,taxNumber,companyName, phonenumber, password, firstName, lastName }
if(values.manageStaff==""){
  values.manageStaff="No"
}

if (isBrowser) {

  values.deviceType=2
  
}else{
  values.deviceType=1
}

// imp instructions
// operator id 5
// business owner id 1
// equipment owner id 2
// maintenance partner 4

    switch (step) {
      default:
        return <h1>Form not working. Enable Javascript!</h1>;
      case 1:
        return (
         
          <FirstStepSelectBusinessType
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            />
      
        );
        case 2:
          // if operator do not ask this 
        console.log(values.businessType);
        if (values.businessType != "5") {
        return (
          <div>
          <SecondStepManageStaff
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
          </div>
        );}
        case 3:
          return (
            <ThirdStepPhoneNumberAndOtp
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
      
      case 4:
        // if choose operator
        if (values.businessType == "5") {

        return <FinalStepOperatorPartner

        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}        
        />;}
        case 5:
          // if choose business owner 
          if (values.businessType == "1") {
          return <FinalStepBusinessOwner
  
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}        
          />;}

          case 6:
            // if choose maintenance partner 
            if (values.businessType == "4") {
            return <FinalStepMaintenancePartner
    
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}        
            />;}

            case 7:
              // if choose equipment owner 
              if (values.businessType == "2") {
              return <FinalStepEquipmentOwner
      
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}        
              />;}
          
              case 8:
            return <Confirmation
    
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}        
            />;
    }
  }
}
export default UserForm;
