import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AudioProvider from "./context/AudioContext";
import Header from "./components/header/headet";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AudioProvider>
    <Header/>
    <App />
  </AudioProvider>
);