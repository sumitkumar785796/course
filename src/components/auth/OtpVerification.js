import React, { useState, useEffect } from 'react';
import './OtpVerification.css';

const OtpVerification = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [counter, setCounter] = useState(40);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        // Start countdown timer when component mounts
        if (counter > 0) {
            const timer = setTimeout(() => setCounter(counter - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setIsDisabled(false);
        }
    }, [counter]);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Move to next input box if filled
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleResend = () => {
        // Logic to resend OTP can be added here
        alert('OTP resent!');
        setCounter(40);
        setIsDisabled(true);
    };

    return (
        <>
            <section className="heading-page header-text" id="top" style={{
                backgroundImage: `url(./img/log.png)`,
                backgroundSize: 'cover', // Optional: adjust as needed
                backgroundPosition: 'center', // Optional: adjust as needed
                height: '60vh', // Optional: adjust as needed
                width: '100%', // Optional: adjust as needed
            }}>
                <div className="container" >
                    <div className="row">
                        <div className="col-lg-12">
                            <br /><br /><br /><br />
                            <br /><br /><br /><br />
                            <h1 style={{ color: "white", fontWeight: "1000", textAlign: "center" }} >
                            OTP Verification 
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="verification-container">
                <h2 className="verification-title">Verify</h2>
                <p className="verification-subtitle">Your code was sent to you via email</p>
                <div className="otp-container">
                    {otp.map((data, index) => (
                        <input
                            className="otp-input"
                            type="text"
                            name="otp"
                            maxLength="1"
                            key={index}
                            value={data}
                            onChange={e => handleChange(e.target, index)}
                            onFocus={e => e.target.select()}
                        />
                    ))}
                </div>
                <button className="verify-button">Verify</button>
                <p className="resend-text">
                    Didn't receive code?{" "}
                    <button
                        className="resend-button"
                        onClick={handleResend}
                        disabled={isDisabled}
                    >
                        {isDisabled ? `Request again in ${counter}s` : 'Request again'}
                    </button>
                </p>
            </div>
        </>
    );
};

export default OtpVerification;
