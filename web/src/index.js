import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../public/index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el elemento con id 'root'");
}
