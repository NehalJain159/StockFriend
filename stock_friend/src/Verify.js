import React from 'react';
import './css.css';
import confirmOtp from './Services/confirmOtp'

function Verify() {
    let verifyOtp = async (e) => {
        e.preventDefault();
        window.sessionStorage.setItem(
            'otp',
            document.getElementById("I").value+
            document.getElementById("II").value+
            document.getElementById("III").value+
            document.getElementById("IV").value+
            document.getElementById("V").value+
            document.getElementById("VI").value
        );
        let res = await confirmOtp(
            window.sessionStorage.getItem('username'),
            window.sessionStorage.getItem('name'),
            window.sessionStorage.getItem('phoneNumber'),
            window.sessionStorage.getItem('company'),
            window.sessionStorage.getItem('sharePurchasedAtPrice'),
            window.sessionStorage.getItem('noOfSharesPurchased'),
            window.sessionStorage.getItem('desiredSharePrice'),            
        );
        console.log(res);
    }

    return (
        <div>
        <div class="wrapper">
        <h1>Verification</h1>
            Enter the OTP to verify.
            <form action="#" class="otp-form" onSubmit={verifyOtp}>
                <div class="otp-form-no">
                    <input type="number" name='I' id="I"/>
                    <input type="number" name='II' id="II"/>
                    <input type="number" name='III' id="III"/>
                    <input type="number" name='IV' id="IV"/>
                    <input type="number" name='V' id="V"/>
                    <input type="number" name='VI' id="VI"/>
                </div>
                <input type="submit" value="Verify" class="form-btn" />
            </form>
        </div>
    </div>
    )
}

export default Verify;
