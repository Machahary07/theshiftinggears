import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// ✅ Inject Google Fonts (Josefin Sans & Bodoni Moda)
const fonts = [
  "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&display=swap",
  "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&display=swap",
  "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap",
];

fonts.forEach((href) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
});

// ✅ Set up font variables globally
document.documentElement.style.setProperty(
  "--font-josefin",
  "'Josefin Sans', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto"
);
document.documentElement.style.setProperty(
  "--font-bodoni",
  "'Bodoni Moda', serif"
);
document.documentElement.style.setProperty(
  "--font-roboto",
  "'Roboto', sans-serif"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
