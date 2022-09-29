import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthorizationLayout from "./layouts/AuthorizationLayout";
import AuthorizationPage from "./pages/AuthorizationPage";
import MainPage from "./pages/MainPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="" element={<AuthorizationLayout />}>
        <Route path="" element={<AuthorizationPage />} />
      </Route>
      <Route path="usr/" element={<MainLayout />}>
        <Route path="mypage" element={<MainPage />} />
        <Route path="messanger" element={<MainPage />} />
        <Route path="friends" element={<MainPage />} />
        <Route path="branches" element={<MainPage />} />
        <Route path="anime" element={<MainPage />} />
        <Route path="help" element={<MainPage />} />
      </Route>

      <Route path="*" element={<>Page not found</>} />
    </Routes>
  );
};

export default App;
