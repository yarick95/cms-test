import React, { Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import { tabsData } from "./tabs";

import { DummyTable } from "./tabs/dummyTable";
import { DummyChart } from "./tabs/dummyChart";
import { DummyList } from "./tabs/dummyList";

function asyncComponentImport(tabId) {
  switch (tabId) {
    case "dummyTable":
      return DummyTable;
    case "dummyChart":
      return DummyChart;
    case "dummyList":
      return DummyList;
    default:
      throw new Error(`Unknown tab ID: ${tabId}`);
  }
}

const App = () => {
  const [initialTab, setInitialTab] = useState("");

  useEffect(() => {
    const sortedTabs = tabsData.sort((a, b) => a.order - b.order);

    if (sortedTabs.length > 0) {
      setInitialTab(sortedTabs[0].id);
    }
  }, []);

  return (
    <Router basename="/cms-test">
      <div>
        <nav>
          {tabsData.map((tab) => (
            <NavLink
              key={tab.id}
              to={`/${tab.id}`}
              style={{ marginRight: "10px" }}
            >
              {tab.title}
            </NavLink>
          ))}
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                initialTab ? <Navigate to={`/${initialTab}`} replace /> : null
              }
            />
            {tabsData.map((tab) => {
              const TabComponent = asyncComponentImport(tab.id);
              return (
                <Route
                  key={tab.id}
                  path={`/${tab.id}`}
                  element={<TabComponent />}
                />
              );
            })}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;