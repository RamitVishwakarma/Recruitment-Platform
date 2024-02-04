import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import {
  Homepage,
  Layout,
  Auth,
  Tasks,
  ResetPass,
  UserHome,
  ProjectSubmission,
  Profile,
  Quizes,
  QuizHome,
  QuizPage,
  ProtectedRoute,
  AdminLogin,
  Dashboard,
  AllUsers,
  AdminProfile,
} from "./utils/lazyloading";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
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
              <Route path="" element={<UserHome />} />
              <Route path="profile" element={<Profile />} />
              <Route path="project" element={<ProjectSubmission />} />
              <Route path="quizes" element={<Quizes />} />
              <Route path="quiz_guidelines" element={<QuizHome />} />
              <Route path="quiz" element={<QuizPage />} />
            </Route>
          </Route>

          {/* admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<AllUsers />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
