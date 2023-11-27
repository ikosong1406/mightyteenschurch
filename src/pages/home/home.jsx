import React, { useEffect } from "react";
import "animate.css"; // Import Animate.css
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../../assets/355911607_609589554614360_423615178947572091_n.jpg";
import img2 from "../../assets/356069328_609526054620710_949751339443024639_n.jpg";
import img3 from "../../assets/379406542_653466313560017_5609026961233668190_n.jpg";
import img4 from "../../assets/382753579_657221883184460_8670720916081614704_n.jpg";

import img5 from "../../assets/376493696_648648477375134_5459179183161086595_n.jpg";
import img6 from "../../assets/376503472_648648484041800_1833202178769554934_n.jpg";
import img7 from "../../assets/376543734_648648494041799_6593546905301310373_n.jpg";
import img8 from "../../assets/376644947_648648500708465_6035317202461805376_n.jpg";

import img9 from "../../assets/profile.jpg";
import "./home.css";

const Home = () => {
  // Function to add the "animate__animated" class to trigger animations
  const addAnimation = () => {
    document.querySelectorAll(".animated").forEach((element) => {
      element.classList.add("animate__animated");
    });
  };

  useEffect(() => {
    addAnimation(); // Add animations when the component mounts
  }, []);

  return (
    <div className="homeContainer">
      <div className="homePart1 animated animate__slideInDown">
        <div className="homePart1-text">
          <h3>WELCOME HOME</h3>
          <h4>We are glad you are here!</h4>
          <a href="/events">Be A Part of Us</a>
        </div>
      </div>

      <div className="homePart2 animated animate__fadeIn">
        <div className="design">
          <h3>Welcome to </h3>
          <h2> THE FAMILY !</h2>
        </div>
        <hr
          style={{
            width: "15%",
            float: "left",
            marginTop: -15,
            backgroundColor: "#4CAF50",
            height: 3,
          }}
        />
        <p>
          The #Teens #Church of @gicfamily. We are set to Educate, Entertain,
          and Edify the young ones.
        </p>
      </div>

      <div className="homePart3 animated animate__slideInRight">
        <div className="design">
          <h3>What we do</h3>
          <h2> IN CHURCH</h2>
        </div>
        <hr
          style={{
            width: "15%",
            float: "left",
            marginTop: -20,
            marginLeft: 0,
            backgroundColor: "#4CAF50",
            height: 3,
          }}
        />
        <div className="homePart3-imgDiv">
          <img src={img1} alt="" />
          <img src={img2} alt="" />

          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
        <a
          href="https://web.facebook.com/MightyTeensChurch/photos"
          className="resourcebtn"
          target="_blank"
        >
          {" "}
          SEE MORE GALLERY
        </a>
      </div>

      <div className="homePart4 animated animate__slideInLeft">
        <div className="design">
          <h3>Most Recent</h3>
          <h2> QUOTES</h2>
        </div>
        <hr
          style={{
            width: "15%",
            float: "left",
            marginTop: -20,
            marginLeft: 0,
            backgroundColor: "#4CAF50",
            height: 3,
          }}
        />
        <div className="homePart3-imgDiv">
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
        </div>
        <a
          href="https://web.facebook.com/MightyTeensChurch/photos"
          className="resourcebtn"
          target="_blank"
        >
          {" "}
          SEE MORE QUOTES
        </a>
      </div>

      <div className="homePart5">
        <div className="design">
          <h3>Amazing</h3>
          <h2>TESTIMONIES</h2>
        </div>
        <hr
          style={{
            width: "15%",
            float: "left",
            marginTop: -20,
            marginLeft: 0,
            backgroundColor: "#4CAF50",
            height: 3,
          }}
        />
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-card">
              <h1>Helen Peter</h1>
              <h3>
                was sick and i called pastor and he prayed for me and i recieved
                my healing
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-card">
              <h1>Helen Peter</h1>
              <h3>
                was sick and i called pastor and he prayed for me and i recieved
                my healing
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-card">
              <h1>Helen Peter</h1>
              <h3>
                was sick and i called pastor and he prayed for me and i recieved
                my healing
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-card">
              <h1>Helen Peter</h1>
              <h3>
                was sick and i called pastor and he prayed for me and i recieved
                my healing
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="homePart6 animated animate__slideInUp">
        <img src={img9} alt="" />
        <div className="textArea">
          <div className="design">
            <h3>Connect With</h3>
            <h2> OUR PASTOR</h2>
          </div>
          <hr
            style={{
              width: "15%",
              float: "left",
              marginTop: -15,
              backgroundColor: "#4CAF50",
              height: 3,
            }}
          />
          <h3 className="description">
            I'm Ibaraghoemi Nengimote, The Pastor of Mighty Teens Church, I
            personally welcome you to our official website, and would love to
            hear from and pray with you. Get in touch with me via any of my
            personal social media handles to stay connected.
          </h3>
          <div className="iconsX">
            <a href="">
              <i
                class="bx bxl-facebook"
                id="fb"
                style={{ fontSize: 50, marginLeft: 20 }}
              ></i>
            </a>
            <a href="">
              <i
                class="bx bxl-instagram"
                id="ig"
                style={{ fontSize: 50, marginLeft: 20 }}
              ></i>
            </a>
            <a href="">
              <i
                class="bx bxl-tiktok"
                id="tik"
                style={{ fontSize: 50, marginLeft: 20 }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
