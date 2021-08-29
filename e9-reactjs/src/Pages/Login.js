import NavigationMenu from '../Components/Reusable/NavigationMenu';
import "../Assets/Css/custom.css";

import AdsCarousel from '../Components/Repeatable/Ads' ;
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

import PhoneNumberField from '../Components/Repeatable/PhoneNumber';
import PasswordField from '../Components/Repeatable/Password';



const Login = (props) => (
  
    <div>
    <NavigationMenu />

    <div className='content'>
    
    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div class="card card0 border-0">
        <div class="row d-flex">
            <div class="col-lg-7">
                <div class="card1 pb-5">
                    <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> 
                    <AdsCarousel />
                     </div>
                </div>
            </div>
            <div class="col-lg-5 mt-5 ">
                <div class="card2 card border px-4 py-5 shadow-lg rounded login-box">
                    <div class="row mb-4 px-3">
                        <h6 class="mb-0 mr-4 mt-2 mx-auto text-center">Log In</h6>
                    </div>
                      
                        <PhoneNumberField />
                        
                      
                        <PasswordField />    
                    
                    
                    <div class="row px-3 mb-4 mt-3">
                        <div class="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" class="custom-control-input"/> <label for="chk1" class="custom-control-label text-sm">Remember me</label> </div> <a href="#" class="ml-auto mb-0 text-sm">Forgot Password?</a>
                    </div>
                   
                    <a className=' text-primary mb-4' href='./register'>Not User? Sign Up </a>
                    <div class="row px-3 mb-4">
                        <p className='terms'>By clicking submit I agree to <a href='' className='text-warning'>Terms and Conditions</a></p>
                    </div>
                   
                    <div class="row mx-auto">  

                    <Button
                 style={{
            // marginTop:"30px",
            marginRight:"1em",
            background: 'linear-gradient(45deg, black 30%, black 90%)',
            border: 0,
            borderRadius: 5,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            hover:"#f4af0c",
            height: 48,
            padding: '0 30px',
            className:'submitButton'

         }}
          label="Continue"
        >
          Submit
        </Button>
                     </div>
            </div>
        </div>
        </div>
    </div>
</div>
    </div>
    </div>
  
  
  );
  
  export default Login;
  
