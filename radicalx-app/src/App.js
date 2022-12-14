import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
// import Signup from "./pages/Signup";
import Home from "./pages/Home/Home";
import AddIntership from "./pages/AddIntership/AddIntership";
import Intership from "../src/components/Intership/Interships"
import Signup from "../src/pages/Signup"
// import Dashboard from "./components/Dashboard/Dashboard"

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthContextProvider } from "./components/context/AuthContext";

function App() {
  
  return (
    <AuthContextProvider>
    <BrowserRouter>
    {/* <Dashboard/> */}
    {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
        <Route path="/interships" element={<Intership />}></Route>
        <Route path="/addintership" element={<AddIntership />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  </AuthContextProvider>
);
}

export default App;
