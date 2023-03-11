import React, { useReducer } from "react";

import { Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { ProductsContainerStyled, ProductsStyled } from "./ProductsStyled";
import TabsTitle from "./TabsTitle";
import { bottlesReducer, bottlesReducerValue } from "../lib/handle-bottle";
import { getAllBottles } from "../../api/fake-db-products";

const allAllBottles = getAllBottles();

export default function Bottles(): JSX.Element {
  const [bottle, dispatch] = useReducer(bottlesReducer, bottlesReducerValue);

  function handleBottleClick(id: string): void {
    if (bottle.bottleId === id) {
      dispatch(undefined);
    } else {
      dispatch(id);
    }
  }

  return (
    <ProductsContainerStyled>
      <TabsTitle />
      <Typography paragraph>Escolha o tamanho do copo:</Typography>

      <ProductsStyled>
        {allAllBottles.map(({ name, desc, imageLink }, index) => {
          const id = index.toString();
          return (
            <ProductCard
              key={name}
              isSelected={bottle.bottleId === id}
              onChoose={() => {
                handleBottleClick(id);
              }}
              imageLink={imageLink}
              name={name}
              desc={desc}
            />
          );
        })}
      </ProductsStyled>

      <Typography paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
    </ProductsContainerStyled>
  );
}
