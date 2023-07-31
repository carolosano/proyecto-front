import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Contacto | Carolina Losano - carolosano@gmail.com
      </p>
    </footer>
  );
};

export default Footer;


