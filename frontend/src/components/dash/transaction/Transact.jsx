import React from 'react'
import './profit.css'

function Transact() {
  return (
    <div className="profit-p-ctn">
        <h1 className='white'>Transactions</h1>

        <div className="roi-table">
            <table>
                <tr>
                    <th>Transaction</th>
                    <th>Amount</th>
                    <th className='w-type'>Type</th>
                    <th>Date created</th>
                </tr>
                
                    {
                        window.user.transaction.map(({Tran, amount, date, transaction_id, verified}, index) => {
                            return (
                                <tr>
                                    <td>{Tran}</td>
                                    <td>${amount}</td>
                                    <td className='w-type'>{date}</td>
                                    <td className='tableDate'>{verified == true ? <p className='green'>Successful</p> : <p className='red'>Pending</p>}</td>
                                </tr>
                            )
                        })
                    }
                    
            </table>
            <p>No profit records to show</p>
        </div>
    </div>
  )
}

export default Transact