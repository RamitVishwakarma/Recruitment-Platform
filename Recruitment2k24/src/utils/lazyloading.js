import loadable from "@loadable/component";

// User pages import
const Homepage = loadable(() => import("../pages/user/Homepage"));
const Layout = loadable(() => import("../components/Layout"));
const Auth = loadable(() => import("../pages/user/Auth"), {
  resolveComponent: (component) => component.Auth,
});
const Tasks = loadable(() => import("../pages/user/Tasks"));
const ResetPass = loadable(() => import("../pages/user/ResetPass"));
const UserHome = loadable(() => import("../pages/user/UserHome"));
const ProjectSubmission = loadable(() =>
  import("../pages/user/ProjectSubmission")
);
const Profile = loadable(() => import("../pages/user/Profile"));
const Quizes = loadable(() => import("../pages/user/Quizes"));
const QuizHome = loadable(() => import("../pages/user/QuizHome"));
const QuizPage = loadable(() => import("../pages/user/QuizPage"));
const ProtectedRoute = loadable(() => import("../utils/ProtectedRoute"));
// Admin pages import
const AdminProtectedRoute = loadable(() =>
  import("../utils/AdminProtectedRoute")
);
const AdminLogin = loadable(() => import("../pages/admin/login"));
const Dashboard = loadable(() => import("../pages/admin/dashboard"));
const AllUsers = loadable(() => import("../pages/admin/allusers"));
const AdminProfile = loadable(() => import("../pages/admin/profile"));

export {
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
  AdminProtectedRoute,
  AdminLogin,
  Dashboard,
  AllUsers,
  AdminProfile,
};
