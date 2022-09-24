import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthorizationLayout from "./layouts/AuthorizationLayout";
import AuthorizationPage from "./pages/AuthorizationPage";

function App() {
  return (
    <Routes>
      <Route path="" element={<AuthorizationLayout />}>
        <Route path="" element={<AuthorizationPage />} />
      </Route>
      <Route path="/usr" element={<MainLayout />}>
        <Route path="" element={<>hello</>} />
      </Route>
    </Routes>
  );
}

export default App;
