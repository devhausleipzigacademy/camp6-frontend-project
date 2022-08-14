import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Tracks from "./routes/TracksOverview";
import Feed from "./routes/Feed";
import Resources from "./routes/Resources";
import "./index.css";
import { TrackDetail } from "./routes/TrackDetail";
import TracksOverview from "./routes/TracksOverview";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/resources" element={<Resources />} />

          <Route path="/tracks">
            <Route index element={<TracksOverview />} />
            <Route path=":trackId" element={<TrackDetail />} />
          </Route>

          <Route path="*" element={<p>404 - Nothing was found here</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
