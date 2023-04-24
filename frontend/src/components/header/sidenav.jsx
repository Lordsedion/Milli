import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {BiBitcoin} from 'react-icons/bi'
import {AiFillEye} from 'react-icons/ai'

function removesideshow() {
  document.getElementById('sdp').style.display = 'none'
  document.getElementById('kl-u-g').style.zIndex = '1'
}

function sidenav() {
  return (
    <div className="side-nav" id='sdp'>
      
      <p className='fa-30'><FaTimes onClick={() => removesideshow()}/></p>
      <div className="reg-class1">
            <a href="#" className="rg-t">Log In</a>
            <a href="#" className="rg-t">Register</a>
        </div>
      <div className="fr-logged-in">
      <p className="wlc-sd">Welcome User5069</p>
       <p><span className='fk'>Your balance : $</span> 3952 <AiFillEye className='fa-29'/></p>
    <a href="#" className='sd-md'><span className='fa-31'><BiBitcoin className='fa-31'/></span>Buy Crypto</a>
    <a href="#" className='sd-md'><span className='fa-31'><BiBitcoin className='fa-31'/></span>Markets</a>
    <a href="#" className='sd-md'><span className='fa-31'><BiBitcoin className='fa-31'/></span>Trade</a>
    <a href="#" className='sd-md'><span className='fa-31'><BiBitcoin className='fa-31'/></span>Loans</a>
    <a href="#" className='sd-md'><span className='fa-31'><BiBitcoin className='fa-31'/></span>Earn</a>
    <a href="#" className='sd-md'><span className='fa-31'><BiBitcoin className='fa-31'/></span>Borrow</a>
      </div>
       
  </div>
  )
}

export default sidenav