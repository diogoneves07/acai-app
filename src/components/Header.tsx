import React from "react";

import { ThirtyFpsSelectOutlined } from "@mui/icons-material";
import styled from "@emotion/styled";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #fff;

  & div {
    height: 45px;
    background-color: rgb(1, 18, 43);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    padding: 20px;
  }

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & svg {
    font-size: 30px;
  }
`;

export default function Header(): JSX.Element {
  return (
    <HeaderStyled>
      <div>
        <a href=".">
          <ThirtyFpsSelectOutlined />
          Delicias de açai!
        </a>
      </div>
    </HeaderStyled>
  );
}
