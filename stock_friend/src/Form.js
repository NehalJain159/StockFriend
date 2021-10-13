import React from 'react';
import './css.css';
import createOtp from './Services/createOtp';


function Form() {

    let submitDetails = async (e) => {
        e.preventDefault();
        window.sessionStorage.setItem('username',document.querySelector('.username').value);
        window.sessionStorage.setItem('name',document.querySelector('.name').value);
        window.sessionStorage.setItem('phoneNumber',document.getElementById('country-code').value+document.getElementById('phone').value);
        window.sessionStorage.setItem('company',document.querySelector('.company').value);
        window.sessionStorage.setItem('sharePurchasedAtPrice',document.querySelector('.stkprice').value);
        window.sessionStorage.setItem('noOfSharesPurchased',document.querySelector('.noofshares').value);
        window.sessionStorage.setItem('desiredSharePrice',document.querySelector('.diff').value);
        let res = await createOtp(
            window.sessionStorage.getItem('username'),
            window.sessionStorage.getItem('phoneNumber')
        );
        console.log(res);
    }

    return (
        <div>
            <div className="wrapper">
                <form action="#" id="user-info" onSubmit={submitDetails}>
                    <div className="pair">
                        <label for='username '>Username </label><br/>
                        <input type='text' name='username' className='username'/><br/>
                    </div>
                    <div className="pair">
                        <label for='name '>Name </label><br/>
                        <input type='text' name='name' className='name'/><br/>
                    </div>
                    <div className="pair">
                        <label for='phone '>Phone Number </label><br/>
                        <input type='text' name='country code' className='phone cnty' id='country-code' placeholder="+91 "></input>
                        <input type='text' name='phone' className='phone' id='phone'></input><br/>
                    </div>
                    <div className="pair">
                        <label for='company'>Company</label><br/>
                        <input type='radio' name='company' className='company'value='Apple' ></input>
                        <label for='apple' className='company'>Apple</label><br/>
                        <input type='radio' name='company' className='company'value='Amazon' ></input>
                        <label for='apple' className='company'>Amazon</label><br/>
                        <input type='radio' name='company' className='company'value='Facebook' ></input>
                        <label for='apple' className='company'>Facebook</label><br/>
                        <input type='radio' name='company' className='company'value='Google' ></input>
                        <label for='apple' className='company'>Google</label>
                    </div>
                    <div className="pair">
                        <label for='stkprice '>Share Price </label><br/>
                        <div className="con">*</div>
                        <div className="cont">Price per share. </div><br/>
                        <input type='text' name='stkprice' className='stkprice'></input><br/>
                    </div>
                    <div className="pair">
                        <label for='noofshares'>No of shares purchased </label><br/>
                        <input type='text' name='noofshares' className='noofshares'></input><br/>
                    </div>
                    <div className="pair">
                        <label for='diff '>Difference</label><br/>
                        <div className="cont">Enter an absolute value or in percentages relative to stock price. ex. +10%, -10%, 10$ etc</div><br/>
                        <input type='text' name='diff' className='diff'></input><br/>
                    </div>
                    <div className="wrap-btn">
                        <div className="button">
                            <input type='submit' value='Submit' className='btn'></input><br/>
                            </div>
                            <div className="button">
                                <input type="reset" className='btn'/>
                            </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;
