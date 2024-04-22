import "./App.css";
import Home from "./components/Home";
import Result from "./components/Result"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
