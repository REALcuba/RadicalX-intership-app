import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Dashboard from "./components/Dashboard/Dashboard"
// import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthContextProvider } from "./components/context/AuthContext";

function App() {
  
  return (
    <AuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  </AuthContextProvider>
);
}

export default App;
