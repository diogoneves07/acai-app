import React, { useReducer } from "react";

import { Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { ProductsContainerStyled, ProductsStyled } from "./ProductsStyled";
import TabsTitle from "./TabsTitle";
import { flavorsReducer, flavorsReducerValue } from "../lib/handle-flavor";
import { getAllFlavors } from "../../api/fake-db-products";

const allFlavors = getAllFlavors();

export default function Flavors(): JSX.Element {
  const [flavor, dispatch] = useReducer(flavorsReducer, flavorsReducerValue);

  function handleFlavorClick(id: string): void {
    if (flavor.flavorId === id) {
      dispatch(undefined);
    } else {
      dispatch(id);
    }
  }

  return (
    <ProductsContainerStyled>
      <TabsTitle />

      <Typography paragraph>Escolha o sabor do seu açai:</Typography>

      <ProductsStyled>
        {allFlavors.map(({ name, desc, imageLink }, index) => {
          const id = index.toString();
          return (
            <ProductCard
              key={name}
              isSelected={flavor.flavorId === id}
              onChoose={() => {
                handleFlavorClick(id);
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
