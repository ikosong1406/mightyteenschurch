import React, { useEffect } from 'react';
import 'animate.css'; // Import Animate.css
import img1 from '../../assets/355911607_609589554614360_423615178947572091_n.jpg';
import img2 from '../../assets/356069328_609526054620710_949751339443024639_n.jpg';
import img3 from '../../assets/379406542_653466313560017_5609026961233668190_n.jpg';
import img4 from '../../assets/382753579_657221883184460_8670720916081614704_n.jpg';

import img5 from '../../assets/376493696_648648477375134_5459179183161086595_n.jpg';
import img6 from '../../assets/376503472_648648484041800_1833202178769554934_n.jpg';
import img7 from '../../assets/376543734_648648494041799_6593546905301310373_n.jpg';
import img8 from '../../assets/376644947_648648500708465_6035317202461805376_n.jpg';

import img9 from '../../assets/140730314_102849558479395_2710878711934037691_n.jpg';
import './home.css';

const Home = () => {
  // Function to add the "animate__animated" class to trigger animations
  const addAnimation = () => {
    document.querySelectorAll('.animated').forEach((element) => {
      element.classList.add('animate__animated');
    });
  };

  useEffect(() => {
    addAnimation(); // Add animations when the component mounts
  }, []);

  return (
    <div className="homeContainer">
      <div className="homePart1 animated animate__slideInDown">
        <h3>WELCOME TO </h3>
        <h1>MIGHTY TEENS CHURCH</h1>
        <h4>We are glad you are here!</h4>
        <a href="/events">Be A Part of Us</a>
      </div>

      <div className="homePart2 animated animate__fadeIn">
        <div style={{ display: 'flex' }}>
          <h3 style={{ marginTop: 25, fontSize: 30 }} className="h">Welcome to </h3>
          <h2 style={{ color: '#0054A7', marginLeft: 10, fontSize: 30 }} className="h"> THE FAMILY !</h2>
        </div>
        <hr
          style={{ width: '15%', float: 'left', marginTop: -15, backgroundColor: '#4CAF50', height: 3 }}
        />
        <p>The #Teens #Church of @gicfamily. We are set to Educate, Entertain, and Edify the young ones.</p>
      </div>

      <div className="homePart3 animated animate__slideInRight">
        <div style={{ display: 'flex' }}>
          <h3 style={{ marginTop: 25, fontSize: 30 }} className="h">What we do</h3>
          <h2 style={{ color: '#0054A7', marginLeft: 10, fontSize: 30 }} className="h"> IN CHURCH</h2>
        </div>
        <hr
          style={{ width: '15%', float: 'left', marginTop: -15, backgroundColor: '#4CAF50', height: 3 }}
        />
       <div style={{display: 'flex', marginTop: 30}}>
         <img src={img1} alt="" style={{width: 600, height: 500, borderRadius: 30}}/>
         <img src={img2} alt="" style={{width: 600, height: 500, marginLeft: 50, borderRadius: 30}}/>        
         </div>
       <div style={{display: 'flex'}}>
       <img src={img3} alt="" style={{width: 600, height: 500, marginTop: 30, borderRadius: 30}}/>
       <img src={img4} alt="" style={{width: 600, height: 500, marginTop: 30, marginLeft:50, borderRadius: 30}}/>
       </div>
        <a href="https://web.facebook.com/MightyTeensChurch/photos" className='resourcebtn' target="_blank"> SEE MORE GALLERY</a>
      </div>

      <div className="homePart4 animated animate__slideInLeft">
        <div style={{ display: 'flex' }}>
          <h3 style={{ marginTop: 25, fontSize: 30 }} className="h">Most Recent</h3>
          <h2 style={{ color: '#0054A7', marginLeft: 10, fontSize: 30 }} className="h"> QUOTES</h2>
        </div>
        <hr
          style={{ width: '15%', float: 'left', marginTop: -15, backgroundColor: '#4CAF50', height: 3 }}
        />
        <div style={{display: 'flex', marginTop: 30}}>
      <img src={img5} alt="" style={{width: 600, height: 500, borderRadius: 30}}/>
      <img src={img6} alt="" style={{width: 600, height: 500, marginLeft: 50, borderRadius: 30}}/>     </div>
    <div style={{display: 'flex'}}>
    <img src={img7} alt="" style={{width: 600, height: 500, marginTop: 30, borderRadius: 30}}/>
       <img src={img8} alt="" style={{width: 600, height: 500, marginTop: 30, marginLeft:50, borderRadius: 30}}/>
       </div>
        <a href="https://web.facebook.com/MightyTeensChurch/photos" className='resourcebtn' target="_blank"> SEE MORE QUOTES</a>
      </div>

      <div className="homePart5 animated animate__slideInUp">
        <img src={img9} alt="" style={{ width: 300, height: 300, marginLeft: 150, borderRadius: 30 }} />
        <div style={{ marginLeft: 20 }}>
          <div style={{ display: 'flex' }}>
            <h3 style={{ marginTop: 25, fontSize: 30 }} className="h">Connect With</h3>
            <h2 style={{ color: '#0054A7', marginLeft: 10, fontSize: 30 }} className="h"> OUR PASTOR</h2>
          </div>
          <hr
            style={{ width: '15%', float: 'left', marginTop: -15, backgroundColor: '#4CAF50', height: 3 }}
          />
          <h3>I'm Ibaraghoemi Nengimote, Pastor of Mighty Teens Church, I personally welcome you to our official website, and would love to hear from and pray with you. Get in touch with me via any of my personal social media handles to stay connected.</h3>
          <div style={{ display: 'flex' }}>
            <a href=""><i class='bx bxl-facebook' id='fb' style={{ fontSize: 50, marginLeft: 20 }}></i></a>
            <a href=""><i class='bx bxl-instagram' id='ig' style={{ fontSize: 50, marginLeft: 20 }}></i></a>
            <a href=""><i class='bx bxl-tiktok' id='tik' style={{ fontSize: 50, marginLeft: 20 }}></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
