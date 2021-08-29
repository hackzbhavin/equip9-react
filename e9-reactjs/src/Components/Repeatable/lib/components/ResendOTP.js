import React from "react";
import PropTypes from "prop-types";
import useResendOTP from "../hooks/resendOTP";
import {Button } from "@material-ui/core";


function ResendOTP({ renderTime, renderButton, style, className, ...props }) {
  const { remainingTime, handelResendClick } = useResendOTP(props);
  return (
    <div
      className={className || ""}
      data-testid="otp-resend-root"
      style={{
        display: "flex",
        justifyContent: "space-between",
        ...style
      }}
    >
      {renderTime ? (
        renderTime(remainingTime)
      ) : (
        <span class='text-warning'>{remainingTime} sec</span>
      )}
      {renderButton ? (
        renderButton({
          disabled: remainingTime !== 0,
          onClick: handelResendClick,
          remainingTime
        })
      ) : (
        <Button 
        style={{
          marginRight: "10px",
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

          border: 0,
          borderRadius: 5,
          // height: 40,
          padding: '0 10px',
        }}
        
        disabled={remainingTime !== 0} onClick={handelResendClick}>
          Resend OTP
        </Button>
      )}
    </div>
  );
}

ResendOTP.defaultProps = {
  maxTime: 10,
  timeInterval: 1000,
  style: {}
};

ResendOTP.propTypes = {
  onTimerComplete: PropTypes.func,
  onResendClick: PropTypes.func,
  renderTime: PropTypes.func,
  renderButton: PropTypes.func,
  maxTime: PropTypes.number,
  timeInterval: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string
};

export default ResendOTP;
