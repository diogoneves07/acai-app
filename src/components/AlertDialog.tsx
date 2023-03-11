import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "@emotion/styled";

const Div = styled.div`
  background-color: #1c1b22;
`;

export default function AlertDialog({
  title,
  mesage,
  onConfrim,
}: {
  mesage: string;
  title: string;
  onConfrim: () => void;
}): JSX.Element {
  const [open, setOpen] = useState(true);

  function handleClose(): void {
    setOpen(false);
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Div>
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              sx={{ color: "#fff" }}
            >
              {mesage}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={onConfrim} autoFocus>
              Comfirmar
            </Button>
          </DialogActions>
        </Div>
      </Dialog>
    </div>
  );
}
