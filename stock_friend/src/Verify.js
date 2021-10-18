import React from 'react';
import './css.css';
import confirmOtp from './Services/confirmOtp'
import {Link} from 'react-router-dom'

function Verify() {

    let increaseTabindex = (e) => {
        let nextTabindex;
        if(e.key>="0" && e.key<="9")
            nextTabindex = document.activeElement.tabIndex + 1
        else if (e.keyCode === 8)
            nextTabindex = document.activeElement.tabIndex - 1
        else
            nextTabindex = 0
        let inputElements = document.getElementsByClassName("otp")
        for(let i=0; i<inputElements.length; i++)
        {
            let tabindex = Number(inputElements[i].getAttribute("tabIndex"))
            if(nextTabindex === tabindex)
                inputElements[i].focus()
        }
    }

    let verifyOtp = async (e) => {
        e.preventDefault();
        window.sessionStorage.setItem(
            'oneTimePassword',
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
            window.sessionStorage.getItem('oneTimePassword'),
            window.sessionStorage.getItem('company'),
            window.sessionStorage.getItem('sharePurchasedAtPrice'),
            window.sessionStorage.getItem('desiredSharePrice'),            
        );
        console.log(res);
        // window.sessionStorage.removeItem('oneTimePassword');
    }

    return (
        <div>
        <div class="wrapper">
        <h1>Verification</h1>
            Enter the OTP to verify.
            <form action="#" class="otp-form" onSubmit={verifyOtp}>
                <div class="otp-form-no">
                    <input type="number" max="9" name='I' className="otp" id="I" tabIndex="1" onKeyUp={increaseTabindex} required />
                    <input type="number" max="9" name='II' className="otp"  id="II" tabIndex="2" onKeyUp={increaseTabindex} required />
                    <input type="number" max="9" name='III' className="otp"  id="III" tabIndex="3" onKeyUp={increaseTabindex} required />
                    <input type="number" max="9" name='IV' className="otp"  id="IV" tabIndex="4" onKeyUp={increaseTabindex} required />
                    <input type="number" max="9" name='V' className="otp"  id="V" tabIndex="5" onKeyUp={increaseTabindex} required />
                    <input type="number" max="9" name='VI' className="otp"  id="VI" tabIndex="6" onKeyUp={increaseTabindex} required />
                </div>
                <div className="wrap-btn">
                    <input type="submit" value="Verify" className="form-btn otp" tabIndex="7" />
                    <Link to="/" className="form-btn link">Back</Link>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Verify;
