import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import loadable from "@loadable/component";

const Homepage = loadable(() => import("./pages/user/Homepage"));
const Layout = loadable(() => import("./components/Layout"));
const Auth = loadable(() => import("./pages/user/Auth"), {
  resolveComponent: (component) => component.Auth,
});
const Tasks = loadable(() => import("./pages/user/Tasks"));
const ResetPass = loadable(() => import("./pages/user/ResetPass"));
const UserHome = loadable(() => import("./pages/user/UserHome"));
const ProjectSubmission = loadable(() =>
  import("./pages/user/ProjectSubmission")
);
const UserProfile = loadable(() => import("./pages/user/UserProfile"));
const Quizes = loadable(() => import("./pages/user/Quizes"));
const QuizHome = loadable(() => import("./pages/user/QuizHome"));
const QuizPage = loadable(() => import("./pages/user/QuizPage"));
const ProtectedRoute = loadable(() => import("./utils/ProtectedRoute"));
// Admin pages import
const AdminLogin = loadable(() => import("./pages/admin/login"));
const Dashboard = loadable(() => import("./pages/admin/dashboard"));
const AllUsers = loadable(() => import("./pages/admin/allusers"));
const Profile = loadable(() => import("./pages/admin/profile"));

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
            <Route path="profile" element={<UserProfile />} />
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
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
