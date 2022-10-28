import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
import { listener } from "./components/utils/firebase/listener";
import { useEffect } from "react";

function App() {
  useEffect(() => listener(console.log), []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      
      
    </Routes>
  );
}

export default App;
