import { useState } from "react";
import { CaretLeft } from "phosphor-react";
import Sidebar from "./components/Sidebar";

function App() {
  const [open, setOpen] = useState("open");

  return (
    <div className="flex">
      {/* Container sidebar */}
      <Sidebar />
      <h1>Content</h1>
    </div>
  );
}

export default App;
