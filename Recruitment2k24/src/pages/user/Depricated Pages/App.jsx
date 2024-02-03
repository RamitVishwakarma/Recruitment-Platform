// User pages import
import Homepage from "../Homepage";
import { Auth } from "../Auth";
import ResetPass from "../ResetPass";
import UserHome from "../UserHome";
import ProjectSubmission from "../ProjectSubmission";
import UserProfile from "./pages/user/UserProfile";
import QuizHome from "../QuizHome";
import QuizPage from "../QuizPage";
// Admin pages import
import AdminLogin from "../../admin/login";
import Dashboard from "../../admin/dashboard";
import AllUsers from "../../admin/allusers";
import Profile from "../../admin/profile";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* user routes */}
        <Route exact path="/" element={<Homepage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/reset-password" element={<ResetPass />} />
        <Route path="/user/home" element={<UserHome />} />
        <Route path="/user/project" element={<ProjectSubmission />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/quizhome" element={<QuizHome />} />
        <Route path="/user/quiz" element={<QuizPage />} />
        {/* admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<AllUsers />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
