import React from 'react'
import './profit.css'

function Profit() {
  return (
    <div className="profit-p-ctn">
        <h1 className='white'>Your ROI history</h1>

        <div className="roi-table">
            <table>
                <tr>
                    <th>Plan</th>
                    <th>Amount</th>
                    <th className='w-type'>Type</th>
                    <th>Date created</th>
                </tr>
                {
                    window.user.profit_record.map(({amount, date, mode, plan_id, }, index) => {
                        return (
                            <tr>
                                <td className='gold'>{plan_id}</td>
                                <td className='green'>${amount}</td>
                                <td className='w-type'>{mode}</td>
                                <td className='tableDate'>{date}</td>
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

export default Profit