import styled from "styled-components";

export const LoadingDiv = styled.div`
  width: 100vw;
  text-align: center;
  padding: 10px;
  color: white;
  background-color: black;
  height: 100vh;
`;

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${props => props.type !== null && `background-image: url(${props.type})`}
`;

export const StyleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyleLogo = styled.h5`
  color: white;
  padding-top: 1%;
  padding-left: 10%;
`;

export const StyleDate = styled.p`
  color: white;
  padding-top: 1%;
  padding-right: 10%;
`;

export const ContainerDiv = styled.div`
  width: 100%;
`;

export const StyleH1 = styled.h1`
  padding-left: 10%;
  color: white;
`;

export const StylePara = styled.p`
  color: white;
  margin-top: 2%;
  padding-left: 10%;
  width: 50vw;
  height: 30vw;
  overflow: hidden;
`;

export const StyleFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyleApod = styled.h4`
  color: white;
  padding-left: 10%;
`;

export const StyleCopyright = styled.p`
  color: white;
  padding-right: 10%;
  padding-top: 1%;
`;

