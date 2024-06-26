import {
  Homepage,
  Layout,
  Auth,
  Tasks,
  ResetPass,
  UserHome,
  ProjectSubmission,
  Profile,
  QuizesDisplay,
  ShowQuiz,
  Guidelines,
  QuizPage,
  ThankYou,
  ProtectedRoute,
  AdminProtectedRoute,
  AdminLogin,
  Dashboard,
  AllUsers,
  AdminProfile,
  UserDetail,
  CreateQuiz,
  GetAllQuiz,
  UpdateQuiz,
} from "./utils/lazyloading";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
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
          <Route path="reset_password/:id" element={<ResetPass />} />
        </Route>
        {/* User Protected Route */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="user/" element={<Layout NavButtonType={"logout"} />}>
            <Route path="" element={<UserHome />} />
            <Route path="profile" element={<Profile />} />
            <Route path="project" element={<ProjectSubmission />} />
            <Route path="quizes" element={<QuizesDisplay />} />
            <Route path="showquiz/:domain" element={<ShowQuiz />} />
            <Route path="quiz_guidelines" element={<Guidelines />} />
            <Route path="quiz" element={<QuizPage />} />
            <Route path="thankyou" element={<ThankYou />} />
          </Route>
        </Route>

        {/* admin routes */}
        <Route path="admin/" element={<Layout NavButtonType={"back"} />}>
          <Route path="login" element={<AdminLogin />} />
        </Route>
        <Route path="admin/">
          <Route path="" element={<AdminProtectedRoute />}>
            <Route path="" element={<Layout NavButtonType={"logout"} />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<AdminProfile />} />
              <Route path="users" element={<AllUsers />} />
              <Route path="user/:id" element={<UserDetail />} />
              <Route path="createQuiz" element={<CreateQuiz />} />
              <Route path="getAllQuiz" element={<GetAllQuiz />} />
              <Route path="updateQuiz/:id" element={<UpdateQuiz />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
