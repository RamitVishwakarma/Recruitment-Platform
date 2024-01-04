// User pages import
import Homepage from "./pages/user/Homepage";
import Domains from "./pages/user/Domains";
import RegistrationForm from "./pages/user/RegistrationForm";
import UserHome from "./pages/user/UserHome";
import ProjectSubmission from "./pages/user/ProjectSubmission";
import UserProfile from "./pages/user/UserProfile";

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
        <Route path="/domains" element={<Domains />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/project" element={<ProjectSubmission />} />
        <Route path="/user-profile" element={<UserProfile />} />
        {/* <Route path="/quizhome" element={<QuizHome/>} />
        <Route path="/quiz" element={<Quiz/>} /> */}
        {/* admin routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
