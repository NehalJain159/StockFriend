import React from 'react';
import './css.css';

function Verify() {
    return (
        <div>
        <div class="wrapper">
        <h1>Verification</h1>
            Enter the OTP to verify.
            <form action="#" class="otp-form">
                <div class="otp-form-no">
                    <input type="number" name='I'/>
                    <input type="number" name='II'/>
                    <input type="number" name='III'/>
                    <input type="number" name='IV'/>
                    <input type="number" name='V'/>
                    <input type="number" name='VI'/>
                </div>
                <input type="submit" value="Verify" class="form-btn" />
            </form>
        </div>
    </div>
    )
}

export default Verify;
