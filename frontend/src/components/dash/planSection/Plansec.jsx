import React from 'react'
import {FaTimes} from 'react-icons/fa'
import './plan.css'

function Block (name) {
    let mr = name+"g"
    document.getElementById(name).style.display = 'block';
    document.getElementById(mr).style.display = 'block';
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  }
  

function CloseModal (name) {
    let mr = name+"g"
    document.getElementById(name).style.display = 'none';
    document.getElementById(mr).style.display = 'none';
}

let modal = document.getElementsByClassName('modal-p-c')
window.onclick = function(event) {
    for (let i=0; i<modal.length; i++){
      if (event.target == modal[i]) {
        modal[i].style.display = 'none'
    }  
    }
    
}

function Modal({name, mini, maxi, minRoi, maxRoi, dur, id}) {
    const submitPlan = e => {
        e.preventDefault()

    var formData = new FormData();
    formData.append("p_id", id);

    fetch ("http://localhost:8000/api/subby/",{
    method: "POST",
    headers: {
        'X-CSRFToken': getCookie('csrftoken'),
        'Authorization': `Bearer ${localStorage.getItem('access')}`
    },
    body: formData    
    }
    )
    .then(response => {
        console.log("Response", response)
        return response.json().then((data) => {
          if (response.status == 200) {
            <Alert bg_color={"bg_green"} info={"Successfuly subscribed to plan."} />
          }         
            else {
              <Alert bg_color={"bg_red"} info={`Insufficient balance`}/>

            }
        }
        )
    })
    }
    return (
    <div className='modal-p-c' id={name}>
        <div className={name+" none giddyBa"}  id={name+"g"} >
            <div className="plan-Na"><p>{name}</p> <span id='closeModal' onClick={() => CloseModal(name)}><FaTimes/></span></div>
            <div className="mnnn-d-s0"><p>Minimum deposit</p> <p>${mini}</p></div>
            <div className="mnnn-d-s0"><p>Maximum deposit</p> <p>${maxi}</p></div>
            <form onSubmit={submitPlan}>
                <div className='l-fourier'>
                {/* <label htmlFor="amt-y" >Enter the amount you wish to invest.</label> */}
                <input type="number" name="inv" id="inv" className='none' value={id}/>
                {/* <input type="number" name="amt-y" id="amt-y" required={true}/> */}
                </div>
                <input type="submit" value="Subscribe" className='by-buy'/>
            </form>
        </div>
        </div>
    )
}

function PlanBut ({name, mini, maxi, minRoi, maxRoi, dur, id}) {
    let btn = document.getElementById(name);
    
        return (
            <div className="p-sn-we-flx-obj">
                <Modal name={name} mini={mini} maxi={maxi} minRoi={minRoi} maxRoi={maxRoi} dur={dur} id={id}/>
                <h2>{name}</h2>
                 <div className="bg-prrce">$ <span className="bg green">{mini}</span></div>
                <div className="flx-un-nu-xlf">
                    <p>Minimum possible deposit</p>
                    <p className="pr-u-n-x">${mini}</p>
                </div>
                <div className="flx-un-nu-xlf">
                    <p>Maximum possible deposit</p>
                    <p className="pr-u-n-x">${maxi}</p>
                </div>
                <div className="flx-un-nu-xlf">
                    <p>ROI per day</p>
                    <p className="pr-u-n-x">{minRoi} - {maxRoi}%</p>
                </div>
                <div className="flx-un-nu-xlf">
                    <p>Duration</p>
                    <p className="pr-u-n-x">{dur} Days</p>
                </div>
                <button className="jd-p" id={name} onClick={() => Block(name)}>Join</button>
            </div>
        )
}


function Plansec() {
  return (
    <div className="profit-p-ctn">
        <h1 className='white'>Plans</h1>
        <p>You have 0 active plans</p>

        <div className="plan-section-nnwe">
            {
                window.user.total_plans.map(({cost, duration, id, minRate, maxRate, minimum, maximum, title}, index) => {
                    return (
                        <PlanBut name={title} mini={minimum} maxi={maximum} minRoi={minRate} maxRoi={maxRate} dur={duration} id={id}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Plansec