import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: center;
  align-contents: center;
  justify-content: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 1px solid #fff;

  box-shadow: 1px 1px 4px #555;
  min-height: 30px;
  width: 100%;
  border-radius: 5px;
  color: ${props => (props.gameOver ? "white" : "#4ea757")};
  background: ${props => (props.gameOver ? "#cc3535" : "#000")};
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  @media (max-width: 768px) {
    width: 40%;
    padding: 5px 20px;
    font-size: 0.8rem;
  }
`;
