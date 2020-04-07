import styled from "styled-components";

export const LoadingDiv = styled.div`
  width: 100vw;
  text-align: center;
  padding: 10px;
`;

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

export const StylePara = styled.p`
  color: white;
  padding-top: 3%;
  padding-left: 10%;
  width: 50vw;
  height: 30vw;
  overflow: hidden;
`;