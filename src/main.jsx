import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Banner from "./components/Hero-Section-Banner-Homepage.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Banner />
  </StrictMode>
);
