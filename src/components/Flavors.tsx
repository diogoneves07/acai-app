import React from "react";

import { Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import styled from "@emotion/styled";

const Div = styled.div`
  max-width: 850px;
  padding: 2%;

  & p {
    margin-top: 40px;
  }
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
export default function Flavors(): JSX.Element {
  return (
    <Div>
      <Typography variant="h4">O Melhor açai do mundo!</Typography>
      <Typography paragraph>Escolha o seu pedido:</Typography>

      <Products>
        <ProductCard
          imageLink="images/acai-morango.jpg"
          createdAt={new Date().toDateString()}
          title="Lorem ipsum dolor sit amet"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        voluptate vitae! Modi quasi reprehenderit dolores aspernatur harum
        aliquid id possimus beatae corrupti laborum, adipisci ad aperiam animi
        deleniti quod repellat."
        />

        <ProductCard
          imageLink="images/acai-morango.jpg"
          createdAt={new Date().toDateString()}
          title="Lorem ipsum dolor sit amet"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        voluptate vitae! Modi quasi reprehenderit dolores aspernatur harum
        aliquid id possimus beatae corrupti laborum, adipisci ad aperiam animi
        deleniti quod repellat."
        />

        <ProductCard
          imageLink="images/acai-morango.jpg"
          createdAt={new Date().toDateString()}
          title="Lorem ipsum dolor sit amet"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        voluptate vitae! Modi quasi reprehenderit dolores aspernatur harum
        aliquid id possimus beatae corrupti laborum, adipisci ad aperiam animi
        deleniti quod repellat."
        />
      </Products>

      <Typography paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        voluptate vitae! Modi quasi reprehenderit dolores aspernatur harum
        aliquid id possimus beatae corrupti laborum, adipisci ad aperiam animi
        deleniti quod repellat.
      </Typography>
    </Div>
  );
}
