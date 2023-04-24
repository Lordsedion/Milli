import React from 'react'
import {AiFillEyeInvisible} from 'react-icons/ai'
import {AiFillEye} from 'react-icons/ai'
import './register.css'
import { useState, useEffect } from 'react'


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

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}


function Register() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

    const onsubmit = e => {
      e.preventDefault();

      const user = {
          "email": email,
          "password": password,
      }
      if (document.getElementById("gg-o").checked != true) {return alert("Werey")}
      else {
        fetch('http://localhost:8000/api/register/', {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': getCookie('csrftoken')
          },
          body: JSON.stringify(user)
      })
          .then(response => {
              return response.json().then((data) => {
                if (response.status == 200) {
                  localStorage.setItem('access', data['access'])
                  localStorage.setItem('refresh', data['refresh'])
                  setCookie('authenticated', true, 7)
                  window.location.replace("http://localhost:8000/dashboard")
                }
                  // console.log(response.status)
              }
              )
          })
  }}
      

  return (
    <div className="reg-ctn">
        
        <div className="reg-opn-ctn">
            <h1 className='white'>Create Free Account Boss</h1>
            <form onSubmit={onsubmit} className='reg-flx'>
                <label htmlFor="email">Personal Email</label>
                <input type="email" name="email" id="email-d" autoComplete={false} onChange={(e) => setEmail(e.target.value)} value={email}/>
                <label htmlFor="password">Password</label>
                <div className="kl-u-gd" id='kl-u-g'>
                <input type="password" name="password" autoComplete={false} id="password-l" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div className="sh-pr">
                    <AiFillEyeInvisible  onClick={showPass} id='shwpF'/>
                    <AiFillEye onClick={hidePass} id='hwpF' className='dsp-none'/>
                </div>
                
                </div>
                
                <label htmlFor="ref-id">Referral Id (Optional)</label>
                <input type="text" name="ref-id" id="ref-id" />
                
                <div className="reg-min-flex">
                    <label htmlFor="gg-o">I have read and agree to <a href="#">Millpay's Terms of Service</a>  and <a href="#">Privacy Policy</a>. <b>*</b></label>
                    <input type="checkbox" name="gg-o" id="gg-o" required={true}/>
                </div>
                <div className="reg-min-flex">
                    <label htmlFor="gg-d">I agree to receive marketing updates from Millpay.</label>
                    <input type="checkbox" name="gg-e" id="gg-o" />
                </div>
                <input type="submit" value="Create personal account" id='sub-reg-btn'/>
            </form>
        </div>
    </div>
  )
}

export default Register