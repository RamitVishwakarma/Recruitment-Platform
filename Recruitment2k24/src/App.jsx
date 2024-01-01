import Domains from "./components/Domains";
import Homepage from "./components/Homepage";
import AdminLogin from "./components/admin/login";
import Dashboard from "./components/admin/dashboard";
import AllUsers from "./components/admin/allusers";
import RegistrationForm from "./components/RegistrationForm";
import AdminLogin from "./components/admin/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/admin-login" element={<AdminLogin />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/allusers" element={<AllUsers />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
