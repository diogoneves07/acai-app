import React from "react";

import type { ReactNode } from "react";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps): JSX.Element {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function OrderTabs({
  tabs,
  tabActived,
}: {
  tabActived: number;
  tabs: JSX.Element[];
}): JSX.Element {
  const defineTabs = tabs.map((e, i) => {
    return (
      <TabPanel key={i} value={tabActived} index={i}>
        {e}
      </TabPanel>
    );
  });

  return <Box sx={{ width: "100%" }}>{defineTabs}</Box>;
}
