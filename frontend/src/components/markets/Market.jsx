import React from 'react'
import {BiBitcoin} from 'react-icons/bi'
import phone from '../../images/phone.png'
import './market.css'

function Market() {
  return (
    <div className="market-1">
        <div className="containee">
            <h1 className='h-titlem white'>Cryptocurrency Markets</h1>
            <div className="sd-ff1">
              <p className="al12">Name</p>
              <p className="al12">Last Price</p>
              <p className="al12-g d-465">24h Change</p>
              <p className="al12">Market Cap</p>
            </div>
  
            <div className="sd-f2">
              <p className="al12"><BiBitcoin className='btcd'/> USDT</p>
              <p className="al12 txt-center">$28076</p>
              <p className="al12-g txt-center">+7.8%</p>
              <p className="al12 txt-right">$29.80m</p>
            </div>
            <div className="sd-f2">
              <p className="al12"><BiBitcoin className='btcd'/> USDC</p>
              <p className="al12 txt-center">$28076</p>
              <p className="al12-g txt-center">+7.8%</p>
              <p className="al12 txt-right">$29.80m</p>
            </div>
            <div className="sd-f2">
              <p className="al12"><BiBitcoin className='btcd'/> BUSD</p>
              <p className="al12 txt-center">$28076</p>
              <p className="al12-g txt-center">+7.8%</p>
              <p className="al12 txt-right">$29.80m</p>
            </div>
            <div className="sd-f2">
              <p className="al12"><BiBitcoin className='btcd'/> SOL</p>
              <p className="al12 txt-center">$28076</p>
              <p className="al12-g txt-center">+7.8%</p>
              <p className="al12 txt-right">$29.80m</p>
            </div>
            <div className="sd-f2">
              <p className="al12"><BiBitcoin className='btcd'/> XRP</p>
              <p className="al12 txt-center">$28076</p>
              <p className="al12-g txt-center">+7.8%</p>
              <p className="al12 txt-right">$29.80m</p>
            </div>

          <div className="prm-ctn">
            <h3 className="promise-1 white">Sign up and build your own portfolio for free!</h3>
          <a href="#" className='gt-st-b'>Get Started </a>
          </div>

          <div className="bb-nn-cc">
            <div className="bb-nn-ff">
              <div className="bb-rr">
                <div className="fst-c">
                  <h1 className='white'>Build your crypto portfolio</h1>
                  <p className='fst-p'>Start your first trade with these easy steps</p>
                </div>

                <div className="ss-n">
                  <h3 className='white'>Create an account</h3>
                  <p>Sign up now to create an account to use for your trade </p>
                </div>

                <div className="ss-n">
                  <h3 className='white'>Fund your account</h3>
                  <p>Add funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods.</p>
                </div>

                <div className="ss-n">
                  <h3 className='white'>Start trading</h3>
                  <p>You're good to go! Buy/sell crypto, set up recurring buys for your investments, and discover what Millpay has to offer. </p>
                </div>
                <a href="#" className='gt-st-b'>Get started</a>
              </div>
              <div className="bb-ll"><img src={phone} alt="img" /></div>
                
            </div>
          </div>
       
        </div>
    </div>
  )
}

export default Market