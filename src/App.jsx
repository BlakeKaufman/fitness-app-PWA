import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

import LoadLandingPage from "./routs/landingPage";
import AdminHome from "./routs/admin";
import SignUpInit from "./routs/signUp/signUpInit";
import { useEffect, useState } from "react";
import AdminIndex from "./routs/admin";

function App() {
  // how to get to differnt pages
  // const navigate = useNavigate();
  const [isUserLoggedIn, setIsUesrLoggedIn] = useState(false);

  useEffect(() => {
    const profileObject = JSON.parse(localStorage.getItem("workoutAppData"));
    setIsUesrLoggedIn(profileObject ? true : false);
  }, []);

  // const isLoggedIn = () => {
  //   const profileObject = JSON.parse(localStorage.getItem("workoutAppData"));

  //   return profileObject ? true : false;
  // };
  // const deviceType = () => {
  //   console.log(window.navigator.platform);
  // };

  // deviceType();

  return (
    <Routes>
      {/* authentication */}
      <Route
        path="/"
        element={isUserLoggedIn ? <AdminHome /> : <LoadLandingPage />}
      />
      {/* Pages paths */}
      <Route
        path="/login"
        element={<SignUpInit setFunction={setIsUesrLoggedIn} />}
      />
      <Route
        path="/admin"
        element={isUserLoggedIn ? <AdminIndex /> : <LoadLandingPage />}
      />
    </Routes>
  );
}

export default App;
