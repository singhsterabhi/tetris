import styled from "styled-components";

import bgImage from "../../img/bg.png";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}#000);
  background-size: cover;
  overflow: hidden;
  outline: none;

  @media (max-width: 768px) {
    overflow: scroll;
  }
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    aside {
      max-width: 75%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
`;
