import { useState } from 'react';
import "../../Assets/Css/bootstrap.min.css";
import "../../Assets/Css/custom.css";


import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import React from 'react'



function PhoneNumber() {
    // `value` will be the parsed phone number in E.164 format.
    // Example: "+12133734253".
    const [value, setValue] = useState()
    return (
<div>      
  <h6 class="mb-2 mt-4 text-sm">Phone Number</h6>
  <div class="input-group mb-3">

      <PhoneInput
        placeholder="Example: 9991199911"
        value={value}

        onChange={setValue}
        defaultCountry="IN"
        class="rounded inputphonenumber"
        />
    </div>
    </div>

    )
  }

  export default PhoneNumber;