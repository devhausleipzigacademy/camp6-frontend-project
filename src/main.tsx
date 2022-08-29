import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./routes/Home";
import Feed from "./routes/Feed";
import Resources from "./routes/Resources";
import "./index.css";
import { ResourcesFeed } from "./routes/ResourcesFeed";
import TracksOverview from "./routes/TracksOverview";
import { TrackDetail } from "./routes/TrackDetail";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/tracks">
              <Route index element={<TracksOverview />} />
              <Route path=":trackId" element={<TrackDetail />} />
            </Route>

            <Route path="/feed" element={<Feed />} />
            <Route path="/resources">
              <Route index element={<Resources />} />
              <Route path=":track" element={<ResourcesFeed />} />
            </Route>
            {/* TODO: add subroute based on tracks e.g. /resources/guitar */}
            <Route path="*" element={<p>404 - Nothing was found here</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
