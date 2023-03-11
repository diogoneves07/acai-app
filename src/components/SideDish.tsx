import React, { useReducer } from "react";

import { Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { ProductsContainerStyled, ProductsStyled } from "./ProductsStyled";
import TabsTitle from "./TabsTitle";
import {
  sideDishsReducer,
  sideDishsReducerValue,
} from "../lib/handle-side-dish";
import { getAllSideDish } from "../../api/fake-db-products";

const allSideDish = getAllSideDish();

export default function SideDish(): JSX.Element {
  const [sideDish, dispatch] = useReducer(
    sideDishsReducer,
    sideDishsReducerValue
  );

  function handleSideDishClick(id: string): void {
    if (sideDish.sideDishId === id) {
      dispatch(undefined);
    } else {
      dispatch(id);
    }
  }

  return (
    <ProductsContainerStyled>
      <TabsTitle />

      <Typography paragraph>Escolha o acompanhamento do açai:</Typography>

      <ProductsStyled>
        {allSideDish.map(({ name, desc, imageLink }, index) => {
          const id = index.toString();
          return (
            <ProductCard
              key={name}
              isSelected={sideDish.sideDishId === id}
              onChoose={() => {
                handleSideDishClick(id);
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
