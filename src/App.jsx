import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

import LoadLandingPage from "./routs/landingPage";
import AdminHome from "./routs/admin/home";

function App() {
  // how to get to differnt pages
  // const navigate = useNavigate();

  const isLoggedIn = () => {
    const userName = localStorage.getItem("username");

    return userName ? true : false;
  };

  return (
    <Routes>
      {/* authentication */}
      <Route
        path="/"
        element={isLoggedIn() ? <AdminHome /> : <LoadLandingPage />}
      />
      {/* Pages paths */}
    </Routes>
  );
}

export default App;
