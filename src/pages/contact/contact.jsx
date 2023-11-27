import React from "react";
import "./contact.css";

const contact = () => {
  return (
    <div>
      <div className="contactPart1">
        <div className="contactPart1-text">
          <h3>We Would Love To Hear From You !</h3>
          <h5> Kindly contact us using the details below</h5>
        </div>
      </div>

      <div className="contactPart2">
        <div className="section1">
          <i class="bx bxs-location-plus" id="section2-icon"></i>
          <h3 style={{ textAlign: "center" }}>OUR ADDRESS</h3>
          <h5 style={{ textAlign: "center" }}>
            30/32 Elioparanwo Road, Off Ada George, Mile 4 Port Harcourt, Rivers
            State, Nigeria.
          </h5>
        </div>
        <div className="section2">
          <i class="bx bxs-envelope" id="section2-icon"></i>
          <h3 style={{ textAlign: "center" }}>E-MAIL US</h3>
          <h5 style={{ textAlign: "center" }}>
            {" "}
            info@gicfamily.org <br />
            connect@gicfamily.org
          </h5>
        </div>
        <div className="section1">
          <i class="bx bxs-phone-call" id="section2-icon"></i>
          <h3 style={{ textAlign: "center" }}>CALL US</h3>
          <h5 style={{ textAlign: "center" }}> +234 812 708 7285</h5>
        </div>
      </div>
    </div>
  );
};

export default contact;
