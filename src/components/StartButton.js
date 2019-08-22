import React from "react";

import { StyledStartButton } from "./styles/StyledStartButton";

const startButton = ({ callback }) => {
  return <StyledStartButton onClick={callback}>Start Button</StyledStartButton>;
};

export default startButton;
