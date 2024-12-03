import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import ErrorBoundary from "./Utilis/ErrorBoundary";

const Home = React.lazy(() => import("./pages/Home"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const Shop = React.lazy(() => import("./pages/Shop"));
const RouteNotFound = React.lazy(() => import("./pages/RouteNotFound"));

function App() {
  return (
    <Router>
      <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="shop" element={<Shop />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
