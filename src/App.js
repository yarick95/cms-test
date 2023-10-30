import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import tabs from "../public/tabs.json";

function asyncComponentImport(tabId) {
  switch (tabId) {
    case "dummyTable":
      return import("./tabs/dummyTable");
    case "dummyChart":
      return import("./tabs/dummyChart");
    case "dummyList":
      return import("./tabs/dummyList");
    default:
      throw new Error(`Unknown tab ID: ${tabId}`);
  }
}

const App = () => {
  const [initialTab, setInitialTab] = useState("");

  return (
    <Router>
      <div>
        <nav>
          {tabs.map((tab) => (
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
            {tabs.map((tab) => {
              const TabComponent = lazy(() => asyncComponentImport(tab.id));
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
