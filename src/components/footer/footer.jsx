import React from 'react'
import '../footer/footer.css'
import Logo from '../../assets/327208925_576920217616732_4689464296116687124_n-removebg-preview.png'

const footer = () => {
  return (
    <div style={{width: '100%'}}>
    <div className='container2'>
      <div className="part1">
        <img src={Logo} alt="" className='image' />
        <h3>30/32 Elioparanwo Road,<br />
            Off Ada George, Mile 4 Port Harcourt,<br />
            Rivers State, Nigeria.</h3>
        <h3>Phone: +234 812 708 7285</h3>
        <h3>Email: info@gicfamily.org</h3>
      </div>

      <div className="part2">
        <h3>LIKE AND FOLLOW US ON </h3>
        <div className="icons">
          <a href=""><i class='bx bxl-facebook' id='fb'></i></a>
          <a href=""><i class='bx bxl-instagram' id='ig'></i></a>
          <a href=""><i class='bx bxl-tiktok' id='tik'></i></a>
        </div>
        <h3 className="copy">© Copyright Mighty Teens Church. All Rights Reserved</h3>
      </div>

      <div className="part3">
        <h3>NEWSLETTER</h3>
        <h4>MTC would like to communicate with you via email. If you’re not currently receiving email from MTCFamily, Kindly subscribe below with your valid email</h4>
        <h5 className='email'>Enter your E-mail</h5>
        <button>Subscribe</button>
      </div>
    </div>
    </div>
  )
}

export default footer