import styled from "styled-components";

export const StyledMobileButtons = styled.div`
  display: flex;
  width: 74%;
  justify-content: space-around;
  flex-wrap: wrap;

  button {
    width: 40%;
    height: 55px;
    margin: 10px 0;
    border-radius: 10px;
    outline: none;
    background: #d5fcf7;
    color: black;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
