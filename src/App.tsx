import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthorizationLayout from "./layouts/AuthorizationLayout";
import AuthorizationPage from "./pages/AuthorizationPage";
import MypagePage from "./pages/MypagePage";
import MessengerPage from "./pages/MessengerPage";
import FriendsPage from "./pages/FriendsPage";
import BranchesPage from "./pages/BranchesPage";
import AnimePage from "./pages/AnimePage";
import HelpPage from "./pages/HelpPage";
import ChatPage from "./pages/ChatPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="" element={<AuthorizationLayout />}>
        <Route path="" element={<AuthorizationPage />} />
      </Route>
      <Route path="usr" element={<MainLayout />}>
        <Route path="mypage" element={<MypagePage />} />
        <Route path="messenger" element={<MessengerPage />} />
        <Route path="messenger/:id" element={<ChatPage />} />
        <Route path="friends" element={<FriendsPage />} />
        <Route path="branches" element={<BranchesPage />} />
        <Route path="anime" element={<AnimePage />} />
        <Route path="help" element={<HelpPage />} />
      </Route>

      <Route path="*" element={<>Page not found</>} />
    </Routes>
  );
};

export default App;
