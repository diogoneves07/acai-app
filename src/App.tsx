import React, { useState } from "react";

import "./App.css";
import BottomNavigation from "./components/BottomNavigation";
import Flavors from "./components/Flavors";
import Layout from "./components/Layout";
import OrderTabs from "./components/OrderTabs";

function App(): JSX.Element {
  const [tabActived, setCurrentTab] = useState(0);

  const tabs = [<Flavors key="" />, <div key="">Diogo Neves</div>];

  function nextTab(): void {
    setCurrentTab((i) => {
      return i + 1;
    });
  }

  function previousTab(): void {
    setCurrentTab((i) => {
      return i - 1;
    });
  }

  return (
    <Layout>
      <OrderTabs tabs={tabs} tabActived={tabActived}></OrderTabs>
      <BottomNavigation nextTab={nextTab} previousTab={previousTab} />
    </Layout>
  );
}

export default App;
