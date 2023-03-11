import React from "react";

import {
  ArrowLeft,
  ArrowRight,
  HelpCenter,
  Receipt,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import AddOrderButton from "./AddOrderButton";

const Div = styled.div`
  height: 55px;
  float: left;
  width: 100%;
  color: #fff;
  background-color: transparent;

  .bottomNavigationFixed {
    position: fixed;
    bottom: 0px;
    left: 0px;
    height: 55px;
    background-color: rgb(1, 18, 43);
    width: 100%;
    z-index: 99999;
  }

  .bottomNavigationFixed div {
    height: 100%;
    overflow-x: auto;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bottomNavigationFixed button {
    height: 40px;
    margin: 0 20px;
    background-color: rgb(2, 22, 53);
    text-align: center;
    font-size: 13px;
    padding: 5px;
    border-radius: 0;
  }

  .bottomNavigationFixed button:hover {
    background-color: rgb(3, 29, 69);
  }

  .bottomNavigationFixed svg {
    font-size: 35px;
    position: relative;
  }

  .bottomNavigationFixed span {
    width: 100%;
    height: 100%;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    color: #fff;
    font-size: 13px !important;
  }
  .bottomNavigationFixed span > svg {
    font-size: 25px;
    margin-right: 5px;
  }
`;

export default function BottomNavigation({
  nextTab,
  previousTab,
  helpTab,
  finishOrderTab,
}: {
  nextTab: () => void;
  previousTab: () => void;
  helpTab: () => void;
  finishOrderTab: () => void;
}): JSX.Element {
  return (
    <Div>
      <div className="bottomNavigationFixed">
        <div>
          <Button onClick={helpTab}>
            <span>
              <HelpCenter />
              Ajuda
            </span>
          </Button>
          <Button onClick={previousTab}>
            <ArrowLeft />
          </Button>

          <AddOrderButton />

          <Button onClick={nextTab}>
            <ArrowRight />
          </Button>

          <Button onClick={finishOrderTab}>
            <span>
              <Receipt />
              Finalizar pedido
            </span>
          </Button>
        </div>
      </div>
    </Div>
  );
}
