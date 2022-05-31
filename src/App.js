import "./App.css";
import Home from "./components/home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import OrderPayment from "./components/order-payment";
import { createContext, useState } from "react";
import Login from "./components/login";

export const AppContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [Payment, setPayment] = useState(0);
  return (
    <div className="">
      <AppContext.Provider
        value={{ cart, setCart, Payment, setPayment, user, setUser }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pay-now" element={<OrderPayment />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
