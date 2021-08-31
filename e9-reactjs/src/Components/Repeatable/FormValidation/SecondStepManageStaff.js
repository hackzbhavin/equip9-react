import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import KeyboardBackspaceTwoToneIcon from '@material-ui/icons/KeyboardBackspaceTwoTone';



const SecondStepManageStaff = ({ nextStep,prevStep, handleChange, values }) => {

  console.log(" ==== SECOND STEP MANAGE STAFF ==== ")
  console.log(values)


  // for continue event listener
  const Next = e => {
    e.preventDefault();

    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  };

  return (



    <div className='mx-auto'>
         <KeyboardBackspaceTwoToneIcon 
          onClick={Previous}/>

      <center>
   
        <AppBar style={{ background: "black", color: "#f4af0c" }} className='mt-3' position="" >
          <Toolbar title="Enter User Details">
            <Typography color="inherit" variant="title">
              Do You Want To Manage Your Staff
            </Typography>
          </Toolbar>
        </AppBar>
        <div class='mx-auto'>
        <div class="radiobtn2 mt-4">
            <input type="radio" id="No"
              onChange={handleChange('manageStaff')}
              defaultValue={values.manageStaff}
              name="drone" value="No" checked/>
            <label for="No">No</label>
          </div>

          <div class="radiobtn2">
            <input type="radio" id="Yes"
              onChange={handleChange('manageStaff')}
              defaultValue={values.manageStaff}
              name="drone" value="Yes" />
            <label for="Yes">Yes</label>
          </div>
        </div>

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
              padding: '0 30px',
            }}
            label="Next"
            type="submit"
            onClick={Next}
          >
            Next
          </Button>
        </div>
      </center>

    </div>
  );
}


export default SecondStepManageStaff;
