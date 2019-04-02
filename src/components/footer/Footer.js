import React from "react";
import arkadeyLogo from "../../img/logo-adrakdemy.png";
import { Lazy } from "react-lazy";

const Footer = () => (
  <footer class="footer" id="contact">
    <a
      href="https://git.arkademy.com/fadlimuharrambolt4g"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Lazy ltIE9>
        <img src={arkadeyLogo} alt="Arkademy" width="50rem" />
      </Lazy>
    </a>
    <a
      href="https://github.com/fadlimuharram"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i class="socmend--icon icon-github">&#xf300;</i>
    </a>
    <i class="socmend--icon icon-facebook">&#xf30c;</i>
    <i class="socmend--icon icon-twitter">&#xf315;</i>
    <a
      href="https://www.linkedin.com/in/fadli-muharram-402204113/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i class="socmend--icon icon-linkedin">&#xf318;</i>
    </a>
    <i class="socmend--icon icon-instagram">&#xf32d;</i>
  </footer>
);

export default Footer;
