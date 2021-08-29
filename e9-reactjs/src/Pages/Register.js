import NavigationMenu from '../Components/Reusable/NavigationMenu';
import "../Assets/Css/custom.css";

import Registeration from '../Components/Repeatable/Registeration'
import AdsCarousel from '../Components/Repeatable/Ads' ;


const Register = () => (
  
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
                        <h6 class="mb-0 mr-4 mt-2 mx-auto">Sign Up</h6>
                    </div>
                    
                <Registeration />

           </div>
        </div>
        </div>
    </div>
</div>
    </div>
    </div>
  
  
  );
  
  export default Register;
  
