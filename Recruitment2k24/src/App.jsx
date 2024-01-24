// User pages import
import Homepage from "./pages/user/Homepage";
import Auth from "./pages/user/Auth";
import ResetPass from "./pages/user/ResetPass";
import UserHome from "./pages/user/UserHome";
import ProjectSubmission from "./pages/user/ProjectSubmission";
import UserProfile from "./pages/user/UserProfile";
import QuizHome from "./pages/user/QuizHome";
import QuizPage from "./pages/user/QuizPage";
// Admin pages import
import AdminLogin from "./pages/admin/login";
import Dashboard from "./pages/admin/dashboard";
import AllUsers from "./pages/admin/allusers";
import Profile from "./pages/admin/profile";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* user routes */}
        <Route exact path="/" element={<Homepage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/reset-password" element={<ResetPass />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/project" element={<ProjectSubmission />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/quizhome" element={<QuizHome />} />
        <Route path="/quiz" element={<QuizPage />} />
        {/* admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<AllUsers />} />
        <Route path="/admin/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
