import styled from "styled-components";

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-heigth: 30px;
  width: 100%;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 4px #555;
  color: black;
  background: #3bca66;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;

  :hover {
    box-shadow: 1px 1px 6px #aaa;
  }

  @media (max-width: 768px) {
    width: 40%;
    font-size: 0.8rem;
    padding: 5px 20px;
  }
`;
