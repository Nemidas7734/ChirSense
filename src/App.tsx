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
import ReadMore from "./components/ReadMore";
import Forgot from "./components/Forgot";
import Reset from "./components/Reset";
import ProtectedRoute from "./contexts/authContext/protectedRoute";

function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/result" element={<ProtectedRoute><Result/></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/readmore" element={<ProtectedRoute><ReadMore/></ProtectedRoute>} />
            <Route path="/forgot" element={<Forgot/>} />
            <Route path="/reset" element={<Reset/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
