import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SoftwareCompany } from "./screens/SoftwareCompany";
import { ServicePage } from "./screens/ServicePage";

import { HowItWorksPage } from "./screens/HowItWorksPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SoftwareCompany />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
