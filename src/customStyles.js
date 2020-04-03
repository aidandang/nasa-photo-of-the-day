import styled from "styled-components";

export const WrapperDiv = styled.div`
  height: 100vh;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${props => props.type !== null && `background-image: url(${props.type})`}
`;

export const StyleH1 = styled.h1`
  padding-top: 10%;
  padding-left: 10%;
  color: white;
`;