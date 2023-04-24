import React, { useState } from 'react'
import {MdContentCopy} from 'react-icons/md'
import './invest.css'

let show = false
function Alert({bg_color, info, color='#fff'}) {
    return (
        <h3 className={`${bg_color} alert_main`}>{info}</h3>
    )
}

function copyText() {
    // Get the text to copy
    const textToCopy = document.getElementById("address_id").value;
    
    // Use the Clipboard API to copy the text to the clipboard
    navigator.clipboard.writeText(textToCopy).then(function() {
    }, function() {
      // Show an error message to the user
      alert("Failed to copy text to clipboard");
    });
  }

  function setPrevP(event) {
    var preview = document.getElementsByClassName("up-p-img");
     document.getElementById("u-p_img").name = "ST1001"

    if (event.target.files.length > 0) {
        for (let i = 0; i < event.target.files.length; i++) {
            var src = URL.createObjectURL(event.target.files[i]);
            preview[i].src = src;
            preview[i].style.display = "block";
            document.getElementById('upp-btn').style.display = 'block'
        }
    }

}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
}




const Invest = () => {

    const [allow, setAllow] = useState(false)
    const [amount, setAmount] = useState(0)
    const [curr_id, setCurr] = useState(0)
    const [image, setImage] = useState(undefined)

    setTimeout(function() {setAllow(false)}, 3000)
    
    function allowAM () {
        setAllow(true)
        const textToCopy = document.getElementById("address_id").innerHTML;        
        navigator.clipboard.writeText(textToCopy).then(() => {
        })
      .catch(() => {
      });
    }

    const submitDeposit = e => {
      e.preventDefault();

      var currentDate = new Date();
      var currentHour = currentDate.getHours();
      var currentMinute = currentDate.getMinutes();
      var currentSecond = currentDate.getSeconds();




      var formData = new FormData();
      formData.append("user", window.user.username);
      formData.append("s_proof", image, `${window.user.username.slice(0, -4)}${currentDate.getDate()}${currentHour}${currentMinute}${currentSecond}${image.name.substring(image.name.length - 4)}`);
      formData.append("amount", amount);
      formData.append("curr", curr_id);

      const details = {
          "amount": amount,
          "curr": curr_id,
          "s_proof": image
      }

      fetch("http://localhost:8000/api/deposit/", {
          method: "POST",
          headers: {
              'X-CSRFToken': getCookie('csrftoken'),
              'Authorization': `Bearer ${localStorage.getItem('access')}`
          },
          body: formData
      })
      
      .then(response => {
        console.log("Response", response)
        return response.json().then((data) => {
          if (response.status == 200) {
            <Alert bg_color={"bg_green"} info={"Deposit successful. Confirmation in 5 minutes"} />
          }         
            else {
              <Alert bg_color={"bg_red"} info={`Error placing deposit. Error code ${response.status}`}/>

            }
        }
        )
    })
  }

  function restBoss(event) {
    let files = event.target.files
    setImage(files[0])
    setPrevP(event)
  }

  return (
    <div className="withdraw-D">
        {allow==true && (<Alert bg_color={"bg_green"} info={"Wallet address copied"} />)}
        <h2>Deposit</h2>
        <div className="withdrawal-box">
            <div className="alert-u" onClick={function() {console.log(image.name.substring(image.name.length - 4))}}>Choose your Deposit Currency</div>
            <form onSubmit={submitDeposit} enctype="multipart/form-data">
            <div className="w-l-flxxer">
                <select name="coin" id="depositOP" onChange={function() {
                  document.getElementById("address_id").innerHTML = window.user.currency[document.getElementById("depositOP").value].wallet_address;
                   document.getElementById("titty").innerHTML = window.user.currency[document.getElementById("depositOP").value].title;
                   setCurr(document.getElementById("depositOP").value)}}>
                {
                    window.user.currency.map(({title, id}, index) => {
                      return (
                       <option value={index}>{title}</option>
                      )
                    })
                    
                  }
                    
                </select>
            </div>
                <div className="w-l-flxxer">
                <label htmlFor="amw">Amount to deposit</label>
                <input type="number" name="amw" id="amw" value={amount} onChange={(e) => {setAmount(e.target.value)}} placeholder='Enter amount in dollars'/>
                </div>
                <div className="w-l-flxxer">
                <label htmlFor="btc-p" >Send only <b id='titty'>{window.user.currency[0].title}</b> to this address</label>
                <div className="d-add">
                <p id='address_id'>{window.user.currency[0].wallet_address}</p>
                <p onClick={allowAM } className='foo'><MdContentCopy/></p>
                </div>
                {/* <label className='mumu-1'>Confirmation time ~ 3 minutes</label>  */}
                </div>   

                <div className="w-l-flxxer">
                <label htmlFor="btc-p">Upload <b>Proof</b> of payment here (screenshot)</label>
                <input type="file" name="pics" id="u-p_img" onChange={(e) => {restBoss(e)}} />
                <img className='upp-2 up-p-img' />
                {/* <label className='mumu-1'>Confirmation time ~ 3 minutes</label>  */}
                </div> 
                <input type="submit" value="Deposit" className='by-bu'/>

            </form>
        </div>
    </div>
  )
}

export default Invest