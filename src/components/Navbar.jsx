import React from "react";
import { Link, useMatch, useMatchRoute } from "@tanstack/react-router";
import '../css/global.css';
import Logo from "../assets/Hilfe-logo.png"
import MailingListButton from "./MailingListButton";

// styling in the global css

const Navbar = () => {
    return (
      <>
        <div className="navbar">
          <div className="nav-logo">
            {/* Wrap both the logo and the label inside a single Link */}
            <Link to="/" className="logo-link">
              <img className="logo" src={Logo} alt="Hilfe Logo" />
              <span className="logo-label">Hilfe</span> {/* You can add any styling to the label */}
            </Link>
          </div>
          <div className="navbar-links">
            <NavLink to="/" label="forside" />
            <NavLink to="/about" label="om hilfe" />
            <NavLink to="/contact" label="kontakt" />
          </div>
          <div className="navbar-cta">
              <MailingListButton />
          </div>
        </div>
      </>
    );
};

const NavLink = ({ to, label }) => {
  const matchRoute = useMatchRoute();

  const isActive = matchRoute({ to, fuzzy: false });

  return (
    <Link 
      className={`navbar-link ${isActive ? "active" : ""}`} 
      to={to}
    >
      {label}
    </Link>
  );
};

export default Navbar;
