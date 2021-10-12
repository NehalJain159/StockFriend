import React from 'react';
import './css.css';


function Form() {
    return (
        <div>
            <div className="wrapper">
                <form action="#">
                    <div className="pair">
                        <label for='name '>Name </label><br/>
                        <input type='text' name='name' className='name'/><br/>
                    </div>
                    <div className="pair">
                        <label for='phone '>Phone Number </label><br/>
                        <input type='text' name='country code' className='phone cnty' placeholder="+91 "></input>
                        <input type='text' name='phone' className='phone'></input><br/>
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
                        <label for='stkprice '>Stock Price </label><br/>
                        <div className="con">*</div>
                        <div className="cont">Price per stock. </div><br/>
                        <input type='text' name='stkprice' className='stkprice'></input><br/>
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
