import loadable from "@loadable/component";
// User pages import
export const Homepage = loadable(() => import("../pages/user/Homepage"));
export const Layout = loadable(() => import("../components/Layout"));
export const Auth = loadable(() => import("../pages/user/Authentication/Auth"));
export const Tasks = loadable(() => import("../pages/user/Tasks"));
export const ResetPass = loadable(() =>
  import("../pages/user/Authentication/ResetPass")
);
export const UserHome = loadable(() => import("../pages/user/UserHome"));
export const ProjectSubmission = loadable(() =>
  import("../pages/user/ProjectSubmission")
);
export const Profile = loadable(() => import("../pages/user/Profile/Profile"));
export const QuizesDisplay = loadable(() =>
  import("../pages/user/Quizes/QuizesDisplay/QuizesDisplay")
);
export const Guidelines = loadable(() =>
  import("../pages/user/Quizes/Guidelines")
);
export const QuizPage = loadable(() => import("../pages/user/Quizes/Quiz"));
export const ProtectedRoute = loadable(() => import("../utils/ProtectedRoute"));
// Admin pages import
export const AdminProtectedRoute = loadable(() =>
  import("../utils/AdminProtectedRoute")
);
export const AdminLogin = loadable(() => import("../pages/admin/login"));
export const Dashboard = loadable(() => import("../pages/admin/dashboard"));
export const AllUsers = loadable(() => import("../pages/admin/allusers"));
export const UserDetail = loadable(() => import("../pages/admin/userDetail"));
export const AdminProfile = loadable(() =>
  import("../pages/admin/adminProfile")
);
export const CreateQuiz = loadable(() => import("../pages/admin/createQuiz"));
export const GetAllQuiz = loadable(() => import("../pages/admin/getAllQuiz"));
export const UpdateQuiz = loadable(() => import("../pages/admin/updateQuiz"));
