import { useState } from "react";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Error from "./components/error/Error";
import SignUp from "./components/signup/SignUp";
import LogIn from "./components/login/LogIn";
import MainHome from "./components/mainhome/MainHome";
import ForgottenPassword from "./components/forgottenpassword/ForgottenPassword";
import ResetPassword from "./components/resetpassword/ResetPassword";
import PropertyList from "./components/propertylist/PropertyList";
import User from "./components/user/User";
import ShowMore from "./components/showmore/ShowMore";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/forgottenpassword" element={<ForgottenPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/mainhome" element={<MainHome />} />
        <Route path="/user" element={<User />} />
        <Route path="/showmore" element={<ShowMore />} />
        <Route path="/propertylist" element={<PropertyList />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;