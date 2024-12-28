import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import Header from "./Components/Shared/Header";
import Overview from "./Components/AdminDashboard/Overview";
import MoneyTransaction from "./Components/AdminDashboard/MoneyTransaction";
import Products from "./Components/AdminDashboard/Products";
import Sellers from "./Components/AdminDashboard/Sellers";
import Complaints from "./Components/AdminDashboard/Complaints";
import Landing from "./Components/Landing/Landing";
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/adminDashboard" element={<AdminDashboard />}>
          {/* <Route index element={<AdminDashboard />}></Route> */}
          <Route path="overview" element={<Overview />}></Route>
          <Route path="moneyTransaction" element={<MoneyTransaction />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="sellers" element={<Sellers />}></Route>{" "}
          <Route path="complaints" element={<Complaints />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
