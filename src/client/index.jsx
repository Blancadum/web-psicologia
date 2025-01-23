import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Cambia según la ubicación de tu CSS principal


const root = document.getElementById("root");
createRoot(root).render(<App />);
