import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import Homepage from "./pages/user/Homepage";
import Layout from "./components/Layout";
import { Auth } from "./pages/user/Auth";
import Tasks from "./pages/user/Tasks";
import ResetPass from "./pages/user/ResetPass";
import UserHome from "./pages/user/UserHome";
import ProjectSubmission from "./pages/user/ProjectSubmission";
import UserProfile from "./pages/user/UserProfile";
import QuizHome from "./pages/user/QuizHome";
import QuizPage from "./pages/user/QuizPage";
import ProtectedRoute from "./utils/ProtectedRoute";
// Admin pages import
import AdminLogin from "./pages/admin/login";
import Dashboard from "./pages/admin/dashboard";
import AllUsers from "./pages/admin/allusers";
import Profile from "./pages/admin/profile";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* user routes */}
        <Route path="/" element={<Layout NavButtonType={"login"} />}>
          <Route path="" element={<Homepage />} />
        </Route>
        <Route path="/" element={<Layout NavButtonType={"letsgo"} />}>
          <Route path="tasks" element={<Tasks />} />
        </Route>
        <Route path="/" element={<Layout NavButtonType={"back"} />}>
          <Route path="auth" element={<Auth />} />
          <Route path="reset_password" element={<ResetPass />} />
        </Route>
        {/* User Protected Route */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="user/" element={<Layout NavButtonType={"logout"} />}>
            <Route path="home" element={<UserHome />} />
            <Route path="project" element={<ProjectSubmission />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="quizhome" element={<QuizHome />} />
            <Route path="quiz" element={<QuizPage />} />
          </Route>
        </Route>

        {/* admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<AllUsers />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
