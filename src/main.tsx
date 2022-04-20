import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.scss";
import "virtual:windi.css";
import "virtual:windi-devtools";
import { Suspense } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import routes from "~react-pages";

console.log(routes);
const App = () => {
  return (
    <Suspense
      fallback={
        <section className={"h-screen bg-black text-white text-4xl grid place-content-center"}>
          <h1>xenovrs</h1>
        </section>
      }
    >
      {useRoutes(routes)}
    </Suspense>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
