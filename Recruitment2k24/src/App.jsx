import Domains from "./components/Domains";
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/domains" element={<Domains />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
