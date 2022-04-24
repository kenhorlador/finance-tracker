// packages
import { Routes, Route, Navigate } from "react-router-dom";

// pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import NotFound from "./pages/notfound/NotFound";

// components
import Navbar from "./components/Navbar";

// hooks
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={ user ? <Home /> : <Navigate to="/login" /> } />
            <Route path="/login" element={ user ? <Navigate to="/" /> : <Login /> } />
            <Route path="/signup" element={ user ? <Navigate to="/" /> : <Signup /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App
