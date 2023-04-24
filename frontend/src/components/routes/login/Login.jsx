import React from 'react'
import {AiFillEyeInvisible} from 'react-icons/ai'
import {AiFillEye} from 'react-icons/ai'
import { useState, useEffect } from 'react'

import './login.css'

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
}

function showPass() {
    let x = document.getElementById("password-l");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById('shwpF').style.display = 'none'
      document.getElementById('hwpF').style.display = 'block'
    }
}
function hidePass() {
    let x = document.getElementById("password-l");
    if (x.type === "text") {
      x.type = "password";
      document.getElementById('hwpF').style.display = 'none'
      document.getElementById('shwpF').style.display = 'block'
    } 
}

let url = 'http://localhost:8000/'

function Login() {
  const [errors, setErrors] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  console.log(window.authenticated)
  if (getCookie('authenticated') == true) {
    window.location.replace("http://localhost:8000/dashboard/")
  }
    useEffect(() => {
    if (localStorage.getItem('access') != undefined) {
      // setLoggedIn = true
      window.location.replace("http://localhost:8000/dashboard/")
    }
    }, [])


    const onsubmitLogin = e => {
      e.preventDefault();

      const user = {
          "email": email,
          "password": password,
      }

      fetch("http://localhost:8000/api/login/", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(user)
      })
      
      .then(response => {
        console.log("Response", response)
        return response.json().then((data) => {
          if (response.status == 200) {
            setLoggedIn(true)
            window.authenticated = true
            // console.log(data)
            setCookie('authenticated', true, 7)
            localStorage.setItem("access", data["access"])
            localStorage.setItem("refresh", data["refresh"])
            window.location.replace("http://localhost:8000/dashboard")
          }         
            else {
              setErrors(true)
            }
        }
        )
    })
  }
  
  return (
    <div className="reg-ctn">
        
        <div className="reg-opn-ctn">
            <h1 className='white'>Login</h1>
            <form onSubmit={onsubmitLogin} className='reg-flx'>
                <label htmlFor="email">Personal Email</label>
                <input type="email" name="email" id="email-d" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <label htmlFor="password">Password</label>
                <div className="kl-u-gd" id='kl-u-g'>
                <input type="password" name="password" id="password-l" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div className="sh-pr">
                    <AiFillEyeInvisible  onClick={showPass} id='shwpF'/>
                    <AiFillEye onClick={hidePass} id='hwpF' className='dsp-none'/>
                </div>
                </div>                
                <input type="submit" value="Login" id='sub-reg-btn'/>
            </form>
        </div>
    </div>
  )
}

export default Login