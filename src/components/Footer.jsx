import React from 'react';
import Logo from "../images/logo-footer.png";


const Footer = () => {
  return (
    <footer className="footer">
       <img src={Logo} alt="loga kasa"/> 
      <span>© 2023 Kasa. All rights reserved </span>
    </footer>
  );
};

export default Footer;