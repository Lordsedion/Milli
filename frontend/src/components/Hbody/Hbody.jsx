import React from 'react'
import './hbody.css'
import robot from '../../images/robot.png'

function Hbody() {
  return (
    
        <div className="header-v">
          <div className="container">
            <div className="hvb-g">
                <img src={robot} alt="bg" />
                <div className="sc-fr">
                <h1 className='white'>Buy, Trade, Invest in 20+ cryptocurrencies on MillPay</h1>
                <p className='pdp-1'><a href="#" className='white'>Trade Bitcoin for free</a> </p>
                <p className='pdp-1'><a href="#" className='white'>Invest in any crypto of your choice</a></p>
                <button><h3>Sign up with Email or Phone</h3> </button>
                </div>
            </div>
          <div className="sassa white">
            <div className="sassa-pk">
              <h1 className="sas-stat white">$200 million</h1>
              <p className="sa-st-txt">24h trading volume on Binance exchange</p>
            </div>
            <div className="sassa-pk">
              <h1 className="sas-stat">7+</h1>
              <p className="sa-st-txt white">24h trading volume on Binance exchange</p>
            </div>
            <div className="sassa-pk">
              <h1 className="sas-stat">$48 million</h1>
              <p className="sa-st-txt">24h trading volume on Binance exchange</p>
            </div>
            <div className="sassa-pk">
              <h1 className="sas-stat">80%</h1>
              <p className="sa-st-txt">24h trading volume on Binance exchange</p>
            </div>
          </div>
            
        </div>
    </div>
  )
}

export default Hbody