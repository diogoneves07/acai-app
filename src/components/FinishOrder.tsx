import React from "react";

import { Button, Typography } from "@mui/material";
import { ProductsContainerStyled } from "./ProductsStyled";
import TabsTitle from "./TabsTitle";
import styled from "@emotion/styled";
import { Send } from "@mui/icons-material";
import type { Order } from "../lib/get-order";
import getOrder from "../lib/get-order";
import { getOrderData } from "../../api/fake-db-products";

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

export default function FinishOrder(): JSX.Element {
  const order = getOrderData(getOrder() as Order);

  return (
    <ProductsContainerStyled>
      <TabsTitle />

      <Typography paragraph>
        Açai sabor: <strong>{order.flavor}</strong>, tamanho:{" "}
        <strong>{order.bottle}</strong> e acompanhamento:{" "}
        <strong>{order.sideDish}</strong>
      </Typography>
      <Typography paragraph>Tempo de espera: {order.time} minutos</Typography>
      <Typography paragraph></Typography>

      <Div>
        <Button>
          Comfirmar pedido <Send />
        </Button>
      </Div>
    </ProductsContainerStyled>
  );
}
