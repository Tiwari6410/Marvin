import React from "react";
import "./style/header.css"

const Header = () => {
  return (
    <>
      <div className="header-container" >
        <div className="logo">
          <h3>AlPatrn</h3>
        </div>
        <div className="header-menu">
          <div className="col1">
            <h5>Home Page</h5>
            <p>Generator</p>
            <p>Pricing-plan</p>
            <p>Blog - News</p>
          </div>
          <div className="col2">
            <h5>About</h5>
            <p>Features</p>
            <p>Collection-2023</p>
            <p>Career</p>
          </div>
          <div className="col3">
            <button className="btn-header">Menu </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
