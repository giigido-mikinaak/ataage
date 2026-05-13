import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { lazy, Suspense } from "react";
import AnalyticsTracker from "./components/analytics-tracker";



function App() {
  // lazy load pages so whole app doesnt get rendered at once
  const Home = lazy(() => import("./pages/home"));
  const Learn = lazy(() => import("./pages/learn"));
  const Cards = lazy(() => import("./pages/cards"));
  const Audio = lazy(() => import("./pages/audio"));
  const Supporters = lazy(() => import("./pages/supporters"));
  const PrivacyPolicy = lazy(() => import("./pages/privacypolicy"));
  const Terms = lazy(() => import("./pages/terms"));
  const CookiePolicy = lazy(() => import("./pages/cookiepolicy"));

  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/supporters" element={<Supporters />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookiepolicy" element={<CookiePolicy />} />
        </Routes>
      </Suspense>
      <Footer />

    </>

  );
}

export default App;