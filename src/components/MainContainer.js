import React from 'react';
import {
  ContainerDiv,
  StyleH1,
  StylePara
} from "../customStyles";

function MainContainer(props) {

  return (
    <ContainerDiv>
      <StyleH1>{props.title}</StyleH1>
      <StylePara>{props.explanation}</StylePara>
    </ContainerDiv>
  )
}

export default MainContainer;

