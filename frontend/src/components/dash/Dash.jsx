import React from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'
import {BsBarChartFill, BsWindowSidebar} from 'react-icons/bs'
import {FaBriefcase} from 'react-icons/fa'
import {FaPiggyBank} from 'react-icons/fa'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {MdOutlineSupportAgent} from 'react-icons/md'
import './dash.css'

window.authenticated = false
window.user = {
  "firstName": undefined,
  "lastName": undefined,
  "balance": undefined,
  "bonus": undefined,
  "deposit": undefined,
  "profit": undefined,
  "withdrawal": undefined,
  "planCost": undefined,
  "planName": undefined,
  "planRate": undefined,
  "username": undefined,
  "accountNo": undefined,
  "profit_record": undefined,
  "transaction": undefined,
  "currency": undefined,
  "total_plans": undefined
}

function getAccess() {
  if (localStorage.getItem('refresh') == undefined) {
    console.log("Log in")
  }
  else {fetch('http://localhost:8000/refresh/', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('access')}`
    },
    body: JSON.stringify({"refresh": localStorage.getItem('refresh')})
})
    .then(response => {
        return response.json().then((data) => {
          if (response.status == 200) {
            window.authenticated = true
              console.log(window.user)
              let val = localStorage.setItem(data['access'])
              return val
          }
          else {
            return 0
          }
        }
        )
    })}
  
    return 0
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
}

function Dash() {
  const [verified, setVerified] = useState(false)
  try {
    fetch('http://localhost:8000/api/details/', {
          method: "GET",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${localStorage.getItem('access')}`,
              'access': localStorage.getItem('access'),
              'refresh': localStorage.getItem('refresh')
          },
      })
          .then(response => {
              return response.json().then((data) => {
                // console.log("Response", data)

                if (response.status == 200) {
                  setVerified(true)
                  window.authenticated = true
                  if (data["access"] == 1) {
                    localStorage.setItem('access', data['access_token'])
                  } 
                  window.user.balance = data["account"]["balance"]
                  window.user.bonus = data["account"]["bonus"]
                  window.user.deposit = data["account"]["deposit"]
                  window.user.profit = data["account"]["profit"]
                  window.user.withdrawal = data["account"]["withdrawal"]
                  window.user.accountNo = data["account"]["acc_no"]
                  window.user.firstName = data["user"][0]
                  window.user.lastName= data["user"][1]
                  window.user.username = data["user"][2]
                  window.user.planCost = data["plans"]["cost"]
                  window.user.planName = data["plans"]["title"]
                  window.user.planRate = data["plans"]["rate"]
                  window.user.profit_record = data["profit_record"]
                  window.user.transaction = data["transaction"]
                  window.user.currency = data["currencies"]
                  window.user.total_plans = data["total_plans"]
                    setVerified(true)
                    console.log("Window", window.user)
                    // console.log(data)
                }
                else {
                    window.location.replace("http://localhost:8000/login/")
                }
              }
              )
          })
  }
  catch {
    window.location.replace("http://localhost:8000/login/")
  }
    
  
  return (
    <>
    {window.authenticated == true && (
      <div className="dashboard">
        <div className="flx-dsh-rdl">
            <a href='#' className="d-uname"> <p><FaUserAlt/></p> <p>{window.user.username}</p></a>
            <a href='#' className="d-ehn"><p><AiFillHome/></p> <p>Dashboard</p></a>
            <a href='/dashboard/profits' className="d-ehn"> <p><BsBarChartFill/></p> <p>Profit Record</p></a>
            <a href='/dashboard/transactions' className="d-ehn"> <p><FaBriefcase/></p> <p>Transaction history</p></a>
            <a href='#' className="d-ehn"> <p><FaPiggyBank/></p> <p>Invest</p></a>
            <a href='#' className="d-ehn"> <p><MdOutlineSupportAgent/></p> <p>Help & Support</p></a>
        </div>
        <Outlet/>
    </div>
  )}
    </>
    
  )
}

export default Dash