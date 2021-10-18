import React from 'react';
import './css.css';
import createOtp from './Services/createOtp';
import {Link} from 'react-router-dom';


function Form() {

    let submitDetails = async (e) => {
        e.preventDefault();
        window.sessionStorage.setItem('name',document.querySelector('.name').value);
        window.sessionStorage.setItem('phoneNumber',document.getElementById('country-code').value+document.getElementById('phone').value);
        window.sessionStorage.setItem('sharePurchasedAtPrice',document.querySelector('.stkprice').value);
        window.sessionStorage.setItem('desiredSharePrice',document.querySelector('.diff').value);
        let res = await createOtp(
            window.sessionStorage.getItem('phoneNumber')
        );
        console.log(res);
    }

    let clearData = (e) => {
        window.sessionStorage.removeItem('name');
        window.sessionStorage.removeItem('phoneNumber');
        window.sessionStorage.removeItem('company');
        window.sessionStorage.removeItem('sharePurchasedAtPrice');
        window.sessionStorage.removeItem('desiredSharePrice');
    }

    let storeCompany = (e) => {
        window.sessionStorage.setItem('company',e.target.value);
    }

    return (
        <div>
            <div className="wrapper">
                <form action="#" id="user-info" onSubmit={submitDetails}>
                    <div className="pair">
                        <label for='name '>Name </label><br/>
                        <input type='text' name='name' className='name' required /><br/>
                    </div>
                    <div className="pair">
                        <label for='phone '>Phone Number </label><br/>
                        <input type='text' name='country code' className='phone cnty' id='country-code' placeholder="+91" required></input>
                        <input type='text' name='phone' className='phone' id='phone' required></input><br/>
                    </div>
                    <div className="pair">
                        <div onChange={storeCompany}>Company<br/>
                            <input type='radio' name='company' className='company'value='Apple'></input>
                            <label className='company'>Apple</label><br/>
                            <input type='radio' name='company' className='company'value='Amazon'></input>
                            <label className='company'>Amazon</label><br/>
                            <input type='radio' name='company' className='company'value='Facebook'></input>
                            <label className='company'>Facebook</label><br/>
                            <input type='radio' name='company' className='company'value='Google'></input>
                            <label className='company'>Google</label>
                        </div>    
                    </div>
                    <div className="pair">
                        <label for='stkprice '>Share purchased at price</label><br/>
                        <input type='text' name='stkprice' className='stkprice' required ></input><br/>
                    </div>
                    <div className="pair">
                        <label for='diff '>Desired Stock price per share</label><br/>
                        <div className="cont">Enter an absolute value</div><br/>
                        <input type='text' name='diff' className='diff' required></input><br/>
                    </div>
                    <div className="wrap-btn">
                        <div className="button">
                            <Link to="/verify" className='btn link'>Next</Link>
                        </div>
                        <div className="button">
                            <input type='submit' value='Submit' className='btn'></input><br/>
                        </div>
                        <div className="button">
                            <input type="reset" className='btn' onClick={clearData}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;
