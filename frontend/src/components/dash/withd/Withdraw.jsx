import React from 'react'
import './withdraw.css'

const Withdraw = () => {
  return (
    <div className="withdraw-D">
        <h2>Request for withdrawal</h2>
        <div className="withdrawal-box">
            <div className="alert-u">Your payment method is <b>BITCOIN PAYMENT</b></div>
            <form action="podt" method="post">
                <div className="w-l-flxxer">
                <label htmlFor="amw">Amount to withdraw</label>
                <input type="number" name="amw" id="amw" placeholder='Enter Amount'/>
                </div>
                <div className="w-l-flxxer">
                <label htmlFor="btc-p">Enter your BITCOIN payment address</label>
                <input type="text" placeholder='Enter your Bitcoin address' name='btc-p'/>
                </div>
                <div className="w-l-flxxer">
                <label htmlFor="otp-payment">Enter OTP</label>
                <small>OTP will be sent to your email address</small>
                <input type="text" name="otp-payment" id="otp-bb" placeholder='Enter OTP'/>
                </div>          
                
                <input type="submit" value="Withdraw" className='by-bu'/>
            </form>
        </div>
    </div>
  )
}

export default Withdraw