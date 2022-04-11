// packages
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import NotFound from "./pages/notfound/NotFound";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>




    </div>
  );
}

export default App
