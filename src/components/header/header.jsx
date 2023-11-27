import React, { useState, useEffect } from "react";
import "./header.css";
import Logo from "../../assets/mtc1.png";
import { Link, NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import $ from "jquery";

const Header = ({ clicked, isClicked }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleClicked = () => {
    isClicked(!clicked);
    console.log("clicked");
  };

  useEffect(() => {
    // Check if the page is scrolled
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="NavbarWrapper">
        <Link to="/" className="NavLogo">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <div className="NavElements">
          <NavLink className="Links" to="/">
            HOME
          </NavLink>
          <NavLink className="Links" to="/about">
            ABOUT
          </NavLink>
          <NavLink className="Links" to="/events">
            EVENTS
          </NavLink>
          <NavLink className="Links" to="/contact">
            CONTACT
          </NavLink>
          <NavLink className="Links" to="/partnership">
            PARTNERSHIP
          </NavLink>
        </div>
        {!clicked ? (
          <GiHamburgerMenu onClick={handleClicked} className="Icon" />
        ) : (
          <ImCross onClick={handleClicked} className="Icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
