import React, { useState } from "react";

import "./App.css";
import Alerts from "./components/Alerts";
import Bottles from "./components/Bottles";
import BottomNavigation from "./components/BottomNavigation";
import FinishOrder from "./components/FinishOrder";
import Flavors from "./components/Flavors";
import Help from "./components/Help";
import Layout from "./components/Layout";
import OrderTabs from "./components/OrderTabs";
import SideDish from "./components/SideDish";
import validateOrder from "./lib/validate-order";

function App(): JSX.Element {
  const localStorageTabActived = localStorage.getItem("tabActived");

  const [tabActived, setCurrentTab] = useState(
    typeof localStorageTabActived === "string"
      ? Number(localStorageTabActived)
      : 1
  );

  const [invalidOrder, setInvalidOrder] = useState(false);
  const [invalidOrderMessage, setInvalidOrderMessage] = useState("");

  localStorage.setItem("tabActived", tabActived.toString());

  const [continueOrdering, setContinueOrdering] = useState(1);

  function handleContinueOrdering(): void {
    setCurrentTab(() => continueOrdering);
  }

  const tabs = [
    <Help key="0" lastScreen={handleContinueOrdering} />,
    <Flavors key="1" />,
    <Bottles key="2" />,
    <SideDish key="3" />,
    <FinishOrder key="4" />,
  ];

  const tabsLength = tabs.length - 2;

  function normalizeTabValue(i: number): number {
    return Math.min(Math.max(i, 0), tabsLength);
  }

  function nextTab(): void {
    setCurrentTab((i) => {
      return normalizeTabValue(i + 1);
    });
  }

  function previousTab(): void {
    setCurrentTab((i) => {
      return normalizeTabValue(i - 1);
    });
  }

  function helpTab(): void {
    if (tabActived !== 0) {
      setContinueOrdering(() => tabActived);
    }
    setCurrentTab(() => 0);
  }

  function finishOrderTab(): void {
    const check = validateOrder();

    if (check.flavor && check.bottle) {
      setCurrentTab(() => 4);

      return;
    }
    setInvalidOrder(true);

    if (!check.flavor) {
      setCurrentTab(() => 1);

      setInvalidOrderMessage(() => "Por favor, escolha um sabor de açai!");
      return;
    }
    setCurrentTab(() => 2);
    setInvalidOrderMessage(() => "Por favor, escolha o tamanho do copo!");
  }

  return (
    <>
      <Layout>
        <OrderTabs tabs={tabs} tabActived={tabActived}></OrderTabs>
        <BottomNavigation
          nextTab={nextTab}
          previousTab={previousTab}
          helpTab={helpTab}
          finishOrderTab={finishOrderTab}
        />
      </Layout>
      {invalidOrder && (
        <Alerts
          onClose={() => {
            setInvalidOrder(false);
          }}
          severity="info"
          message={invalidOrderMessage}
        />
      )}
    </>
  );
}

export default App;
