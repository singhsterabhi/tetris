import React from "react";

import StyledCell from "./styles/StyledCell";

import { TETROMINOS } from "../tertrominos";

const cell = ({ type }) => {
  console.log(type);
  return <StyledCell type={type} color={TETROMINOS[type].color} />;
};

export default React.memo(cell);
