import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Tracks from "./routes/Tracks";
import Topics from "./routes/Topics";
import Feed from "./routes/Feed";
import Resources from "./routes/Resources";
import "./index.css";
import Api from "./components/Api";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/feed" element={<Api />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<p>404 - Nothing was found here</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
