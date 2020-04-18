import React from 'react';
import {
  StyleHeader,
  StyleLogo,
  StyleDate
} from "../customStyles";

function Header(props) {

  return (
    <StyleHeader>
      <StyleLogo>crest.studio</StyleLogo>
      <StyleDate>{props.date}</StyleDate>
    </StyleHeader>
  )
}

export default Header;