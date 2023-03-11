import React from "react";
import { Button } from "@mui/material";

import Add from "@mui/icons-material/Add";
import styled from "@emotion/styled";

const Div = styled.div`
  width: 100px;

  & button {
    background-color: rgb(0, 21, 55) !important;

    position: absolute;
    bottom: 35px;
  }

  & svg {
    font-size: 30px;
    position: relative;
    top: 0px !important;
    left: 0px !important;
  }
  & a {
    display: inline-block;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function AddOrderButton(): JSX.Element {
  return (
    <Div>
      <Button>
        <a href="/add-product">
          <Add />
        </a>
      </Button>
    </Div>
  );
}
