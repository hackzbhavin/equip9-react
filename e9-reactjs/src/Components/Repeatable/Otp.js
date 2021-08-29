
import React, {useState} from 'react'
import OTPInput, { ResendOTP } from "./lib";
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';




export default function Otp() {
    const [OTP, setOTP] = useState("");
    var randomOtp = Math.floor(1000 + Math.random() * 9000)
  const theme = useTheme();

  return (
    <Card>
    
      <div >
        <CardContent >
        
<OTPInput
      value={OTP}
      onChange={setOTP}
      autoFocus
      class='otpinp'
      OTPLength={4}
      otpType="number"
      disabled={false}
      

    />
    <br />
     
    <a class='text-sm text-primary support' href=''>Need Help? Support</a>
    <br />
    <br />
    <ResendOTP  onResendClick={() => console.log("Resend clicked")} />
  

        </CardContent>
      </div>
    </Card>
  );
}







