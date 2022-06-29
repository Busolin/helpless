import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Documents from "./pages/Documents";
import LoginScreen from "./pages/LoginScreen";
import Progress from "./pages/Progress";
import RegisterScreen from "./pages/RegisterScreen";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
