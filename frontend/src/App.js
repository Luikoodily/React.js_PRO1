import "./App.css";
import Login from "./component/Login/Login";
import SignUp from "./component/SignUp/SignUp";
import Home from "./component/Home/home";
import ForgotPassword from "./component/ForgotPassword/forgotpassword";
import AutographTranslate from "./component/Home/AutographaTranslate/autographatranslate"
import Translator from "./component/Home/Translator/translator";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./component/Home/Translator/Sidebar/sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="/autographtranslate" element={<AutographTranslate />}></Route>
          <Route path="/translator" element={<Translator />}></Route>
          <Route path="/sidebar" element={ <Sidebar/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
