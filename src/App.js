import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

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
  const [tabs, setTabs] = useState([]);
  const [initialTab, setInitialTab] = useState("");

  useEffect(() => {
    fetch("/tabs.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((tabsData) => {
        const sortedTabs = tabsData.sort((a, b) => a.order - b.order);
        setTabs(sortedTabs);
        if (sortedTabs.length > 0) {
          setInitialTab(sortedTabs[0].id);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

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
