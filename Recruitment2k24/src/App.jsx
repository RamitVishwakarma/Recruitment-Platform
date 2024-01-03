import Domains from "./components/Domains";
import Homepage from "./components/Homepage";
import AdminLogin from "./components/admin/login";
import Dashboard from "./components/admin/dashboard";
import AllUsers from "./components/admin/allusers";
import RegistrationForm from "./components/RegistrationForm";
import Profile from "./components/admin/profile";
import UserHome from "./components/UserHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectSubmission from "./components/ProjectSubmission";
import UserProfile from "./components/UserProfile";

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
