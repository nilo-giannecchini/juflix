import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../../assets/img/Logo.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
          <img className="Logo" src={Logo} alt="Logo Bravo!" />
      </Link>
    </FooterBase>
  );
}

export default Footer;
