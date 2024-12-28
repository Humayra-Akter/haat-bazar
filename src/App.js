import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import Header from "./Components/Shared/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
