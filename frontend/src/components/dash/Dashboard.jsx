import React, { useState } from 'react'
import Dash from './Dash.jsx' 
import Dashboard from '../dashboard.js';


class App1 extends React.Component {
    render() {
      return (
        <div className="AppContainer">
          <Dashboard />
        </div>
      );
    }
  }


function Dashboard1() {
  return (
    <div className="dashboard-c">
        <h2>Welcome {window.user.firstName} {window.user.lastName}</h2>

        <div className="sec-blk-ctn">
            <div className="sec-block-flx-obj">
                <p className="bb-a">${window.user.balance}.00</p>
                <p className="acn-bn">Account Balance</p>
            </div>
            <div className="sec-block-flx-obj">
                <p className="bb-a">${window.user.profit}.00</p>
                <p className="acn-bn">Total Profit</p>
            </div>
            <div className="sec-block-flx-obj">
                <p className="bb-a">${window.user.bonus}.00</p>
                <p className="acn-bn">Total Bonus</p>
            </div>
            <div className="sec-block-flx-obj">
                <p className="bb-a">1</p>
                <p className="acn-bn">Investment Plans</p>
            </div>
            <div className="sec-block-flx-obj">
                <p className="bb-a">${window.user.deposit}.00</p>
                <p className="acn-bn">Total Deposits</p>
            </div>
            <div className="sec-block-flx-obj">
                <p className="bb-a">${window.user.withdrawal}.00</p>
                <p className="acn-bn">Total Withdrawals</p>
            </div>
        </div>

        <App1/>
    </div>
    
  )
}

export default Dashboard1