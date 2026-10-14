// GİRİŞ NOKTASI (C#'taki Program.cs gibi). Her projede aynıdır, değiştirmen gerekmez.
// Akış: index.html → main.jsx → App.jsx → diğer component'ler
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// index.html'deki <div id="root"> bulunur ve App component'i onun içine çizilir.
// StrictMode: geliştirme sırasında olası hataları yakalamaya yardım eder.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
