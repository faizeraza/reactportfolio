import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../assets/logo-no-background.png";
function Nav() {
  return (
    <div className="nav">
      <AnchorLink href="#home">
        <img src={logo} alt='logo' className='logo'></img>
      </AnchorLink>
      {/* <AnchorLink className="Home" href="#home">
        <button>&gt;home.</button>
      </AnchorLink> */}
      <AnchorLink className="Home" href="#skills">
        <button>&gt;skills..</button>
      </AnchorLink>
      <AnchorLink className="Home" href="#projects">
        <button>&gt;projects...</button>
      </AnchorLink>
    </div>
  );
}

export default Nav;
