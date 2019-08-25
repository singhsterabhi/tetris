import styled from "styled-components";

import bgImage from "../../img/background.webp";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}#000) no-repeat center center fixed;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  outline: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    overflow: scroll;
  }
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  margin: 0 auto;
  max-width: 900px;
  justify-content: center;

  aside {
    width: 100%;
    max-width: 250px;
    display: block;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    aside {
      max-width: 90%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
`;
