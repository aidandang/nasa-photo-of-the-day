import React from 'react';
import {
  StyleFooter,
  StyleApod,
  StyleCopyright
} from "../customStyles";

function Footer(props) {

  return (
    <StyleFooter>
      <StyleApod>Astronomy Picture of the Day</StyleApod>
      <StyleCopyright>{props.copyright}</StyleCopyright>
    </StyleFooter>
  )
}

export default Footer;