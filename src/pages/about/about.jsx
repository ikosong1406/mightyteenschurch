import React from "react";
import "./about.css";
import card1 from "../../assets/images.jpeg";
import card2 from "../../assets/images (1).jpeg";
import card3 from "../../assets/images (2).jpeg";
import profile from "../../assets/profile1.jpg";
import profile1 from "../../assets/profile2.jpg";
import profile2 from "../../assets/profile.jpg";

const about = () => {
  return (
    <div>
      <div className="aboutPart1">
        <div className="aboutPart1-text">
          <h1>We Are Mighty Teens</h1>
          <h3>
            In Mighty Teens Church, we help young people genuinely encounter
            God!
          </h3>
        </div>
      </div>

      <div className="aboutPart2">
        <div className="design">
          <h3>About </h3>
          <h2> Who We Are</h2>
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
          Mighty Teens Church is a Spirit-filled Church, where we honor God,
          love people, turn millions into Christ followers, bring healing to the
          hurting and empower members to fulfill their divine destinies.
        </p>
      </div>

      <div className="aboutPart3">
        <div className="card1">
          <img src={card1} alt="" />
          <h3>OUR MISSION</h3>
          <hr
            style={{
              width: "25%",
              float: "left",
              marginTop: -15,
              backgroundColor: "#FF6B6B",
              height: 3,
            }}
          />
          <h5> Our mission is to help you genuinely encounter God</h5>
        </div>
        <div className="card2">
          <img src={card2} alt="" />
          <h3> OUR CORE VALUES</h3>
          <hr
            style={{
              width: "25%",
              float: "left",
              marginTop: -15,
              backgroundColor: "#FF6B6B",
              height: 3,
            }}
          />
          <h5>
            {" "}
            There are three (3) values that drive everything we do in this
            church;
            <ul>
              <li>We Love God Passionately,</li>
              <li> We Love People Unconditionally, and</li>
              <li>We Live Our Faith Intentionally!</li>
            </ul>
          </h5>
        </div>
        <div className="card2">
          <img src={card3} alt="" />
          <h3> OUR VISION</h3>
          <hr
            style={{
              width: "25%",
              float: "left",
              marginTop: -15,
              backgroundColor: "#FF6B6B",
              height: 3,
            }}
          />
          <h5>
            To empower members to walk in righteousness,
            <br /> enjoy the blessings of God, actualize their life purpose,
            serve the Kingdom of God,
            <br /> positively influence their world, and spend eternity with
            God.
          </h5>
        </div>
      </div>

      <div className="aboutPart4">
        <div className="design">
          <h3>About </h3>
          <h2> Our Pastors</h2>
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

        <div className="aboutCard">
          <div className="card1">
            <img src={profile} alt="" />
            <h3>George Izunwa</h3>
            <hr
              style={{
                width: "25%",
                float: "left",
                marginTop: -15,
                backgroundColor: "#FF6B6B",
                height: 3,
              }}
            />
            <h5> Lead Pastor, GIC</h5>
          </div>
          <div className="card2">
            <img src={profile1} alt="" />
            <h3> Manuela Izunwa</h3>
            <hr
              style={{
                width: "25%",
                float: "left",
                marginTop: -15,
                backgroundColor: "#FF6B6B",
                height: 3,
              }}
            />
            <h5> Co-Pastor, GIC</h5>
          </div>
          <div className="card2">
            <img src={profile2} alt="" />
            <h3> Ibaraghoemi Nengimote</h3>
            <hr
              style={{
                width: "25%",
                float: "left",
                marginTop: -15,
                backgroundColor: "#FF6B6B",
                height: 3,
              }}
            />
            <h5> Pastor, MTC</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
