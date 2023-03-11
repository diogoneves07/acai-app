import React, { useState } from "react";
import { Button } from "@mui/material";

import Add from "@mui/icons-material/Add";
import styled from "@emotion/styled";
import AlertDialog from "./AlertDialog";
import validateOrder from "../lib/validate-order";

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
`;

export default function AddOrderButton(): JSX.Element {
  const [dialog, setDialog] = useState(false);

  function handleAddClick(): void {
    const check = validateOrder();

    if (check.bottle || check.flavor) {
      setDialog(() => true);
    } else {
      setDialog(() => false);
    }
  }

  function handleConfrim(): void {
    localStorage.clear();
    location.reload();
  }

  return (
    <Div>
      {dialog && (
        <AlertDialog
          onConfrim={handleConfrim}
          title="Recomeçar pedido!"
          mesage="Exite um pedido em andamento, tem certeza que deseja recomeçar?"
        />
      )}
      <Button onClick={handleAddClick}>
        <Add />
      </Button>
    </Div>
  );
}
