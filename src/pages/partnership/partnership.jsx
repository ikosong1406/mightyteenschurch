import React from 'react'
import './partnership.css'

const partnership = () => {
  return (
    <div>
      <div className="partnershipPart1">
        <h3>Online Payment</h3>
      </div>

      <div className="partnershipPart2">
        <div className="section1">
        <i class='bx bxs-bible' style={{fontSize: 50, marginLeft: '40%'}}></i>
          <h3 style={{textAlign: 'center'}}>Luke 6:38</h3>
          <h5 style={{textAlign: 'center'}}>Give, and it will be given to you. A good measure, pressed down, shaken together, and running over will be poured into your lap.</h5>
        </div>
        <div className="section2">
          <i class='bx bxs-bank' style={{fontSize: 50, marginLeft: '40%'}}></i>
          <h3 style={{textAlign: 'center'}}>BANK TRANSFER</h3>
          <h5 style={{textAlign: 'center'}}>ACCOUNT NAME: Nna Comfort <br /> ACCOUNT NUMBER: 1524500016 <br /> BANK: Access Bank</h5>
        </div>
      </div>
    </div>
  )
}

export default partnership