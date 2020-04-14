import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  ${props => props.url !== null && `background-image: url(${props.url})`}
`;