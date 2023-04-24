import React from 'react' 
import './header.css'
import {GoThreeBars} from 'react-icons/go'
import {AiOutlineUser} from 'react-icons/ai'
import logo from '../../images/gorilla2.png'

function sideshow() {
  document.getElementById('sdp').style.display = 'flex'
  document.getElementById('kl-u-g').style.zIndex = '-1'
}

function Header() {
  return (
      <header>

      <div className="flex-cd">
        <div className="header-n-bar">
        <a href='#' className="h-title"><img src={logo} alt=" " /><h2 href='#' >MILLPAY</h2>  </a>
      </div>

        <div className="flex-rd">
          <div className="fll">
            <a href="#" className="rd-t">Buy Crypto</a>
            <a href="#" className="rd-t">Markets</a>
            <a href="#" className="rd-t">Trade</a>
            <a href="#" className="rd-t">Loans</a>
            <a href="#" className="rd-t">Earn</a>
          </div>

        </div>
        
        {/* {
          window.authenticated == false && (
            <div className="relog">
            <a href="#" className="rg-t">Log In</a>
            <a href="#" className="rg-t">Register</a>
          </div> 
          )
        } */}
        
        <div className="loggedui">
              <AiOutlineUser className='fa-32'/>
          </div>
         <p ><GoThreeBars onClick={()=> sideshow()} className='fa-33'/></p>
      </div>
  
      </header>
  )
}

export default Header