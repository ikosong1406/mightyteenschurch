import React from 'react'
import './contact.css'

const contact = () => {
  return (
    <div>
    <div className="contactPart1">
      <h3>We Would Love To Hear From You !</h3>
      <h5 style={{marginTop: -30, fontFamily:'sans-serif'}}> Kindly contact us using the details below</h5>
    </div>

    <div className="contactPart2">
      <div className="section1">
      <i class='bx bxs-location-plus' style={{fontSize: 50, marginLeft: '45%'}}></i>
        <h3 style={{textAlign: 'center'}}>OUR ADDRESS</h3>
        <h5 style={{textAlign: 'center'}}>30/32 Elioparanwo Road, Off Ada George, Mile 4 Port Harcourt, Rivers State, Nigeria.</h5>
      </div>
      <div className="section2">
        <i class='bx bxs-envelope' style={{fontSize: 50, marginLeft: '45%'}}></i>
        <h3 style={{textAlign: 'center'}}>E-MAIL US</h3>
        <h5 style={{textAlign: 'center'}}>  info@gicfamily.org <br />connect@gicfamily.org</h5>
      </div>
      <div className="section1">
      <i class='bx bxs-phone-call' style={{fontSize: 50, marginLeft: '45%'}}></i>
        <h3 style={{textAlign: 'center'}}>CALL US</h3>
        <h5 style={{textAlign: 'center'}}> +234 812 708 7285</h5>
      </div>
    </div>
  </div>
  )
}

export default contact