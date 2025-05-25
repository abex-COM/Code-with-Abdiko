import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./componets/Hero";
import Layout from "./componets/Layout";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/hero" element={<HeroSection />} />
          </Route>

          <Route
            path="*"
            element={<div className="text-center">404 Not Found</div>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
