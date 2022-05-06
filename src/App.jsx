import { useState } from "react";
import { CaretLeft } from "phosphor-react";
import Sidebar from "./components/Sidebar";
import LoginScreen from "./pages/LoginScreen";

function App() {
  const [open, setOpen] = useState("open");

  return (
    <div>
      {/* Container sidebar */}
      {/* <Sidebar /> */}
      <LoginScreen />
    </div>
  );
}

export default App;
