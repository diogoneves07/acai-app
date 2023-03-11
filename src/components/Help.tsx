import React from "react";

import { Button, Typography } from "@mui/material";
import { ProductsContainerStyled } from "./ProductsStyled";
import TabsTitle from "./TabsTitle";
import styled from "@emotion/styled";
import { ReceiptRounded } from "@mui/icons-material";

const Div = styled.div`
  text-align: center;
  margin-top: 40px;
  & button {
    background-color: rgb(2, 22, 53);
    padding: 10px;
    color: #fff;
  }

  & button > svg {
    margin: 0px 5px;
    position: relative;
    top: -3px;
  }
`;

export default function Help({
  lastScreen,
}: {
  lastScreen: () => void;
}): JSX.Element {
  return (
    <ProductsContainerStyled>
      <TabsTitle />

      <Typography paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
        totam soluta ex, tempore corrupti aut non magni iure placeat unde nisi
        atque laboriosam consequuntur aliquid, quo beatae nam dignissimos
        facere.
      </Typography>

      <Div>
        <Button onClick={lastScreen}>
          <ReceiptRounded /> Continuar pedido
        </Button>
      </Div>
    </ProductsContainerStyled>
  );
}
