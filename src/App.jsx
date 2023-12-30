import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import PropTypes from "prop-types";

function App({ userIsLoaded, user }) {
  // Use React Router Hooks to access the router state and navigate
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Use React Hooks to manage the state and side effects
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in and redirect to the home page if not
    if (userIsLoaded && !user) {
      navigate("/home");
    }
    // Set the isLoggedIn state based on the user prop
    setIsLoggedIn(!!user);
  }, [userIsLoaded, user, navigate]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

// Use PropTypes to validate the props
App.propTypes = {
  userIsLoaded: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default App;
