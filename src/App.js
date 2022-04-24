// packages
import { Routes, Route } from "react-router-dom";

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
  const { authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/signup" element={ <Signup /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App
