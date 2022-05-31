import "./App.css";
import Home from "./components/home";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/dashboard";
import OrderPayment from "./components/order-payment";
import { createContext, useState } from "react";
import Login from "./components/login";

export const AppContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [Payment, setPayment] = useState(0);

  function RequireAuth({ children }) {
    let location = useLocation();
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
  }

  return (
    <div className="">
      <AppContext.Provider
        value={{ cart, setCart, Payment, setPayment, user, setUser }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/pay-now"
            element={
              <RequireAuth>
                <OrderPayment />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />

          <Route
            path="*"
            element={
              <div className="text-center m-auto mt-5 fs-4">
                There's nothing here: 404!
              </div>
            }
          />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
