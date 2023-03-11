import React, { useState } from "react";

import Alert from "@mui/material/Alert";
import type { AlertColor } from "@mui/material/Alert";

import styled from "@emotion/styled";

const Div = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  bottom: 100px;
  margin: 0;
`;

const colors: Record<AlertColor, string> = {
  error: "darkred",
  success: "darkgreen",
  warning: "darkorange",
  info: "darkblue",
};

export default function Alerts({
  severity,
  message,
  onClose,
}: {
  severity: AlertColor;
  message: string;
  onClose?: () => void;
}): JSX.Element {
  const [isOpen, setOpen] = useState(true);
  return (
    <Div style={{ display: isOpen ? "" : "none" }}>
      <Alert
        closeText="Fechar"
        sx={{
          bgcolor: colors[severity],
          maxWidth: "80%",
          minWidth: "300px",
          textAlign: "center",
          minHeight: 60,
        }}
        onClose={() => {
          setOpen(false);
          if (onClose !== undefined) {
            onClose();
          }
        }}
        severity={severity}
      >
        {message}
      </Alert>
    </Div>
  );
}
