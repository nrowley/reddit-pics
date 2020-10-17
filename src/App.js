import React, { useState } from "react";
import "./App.css";
import Topbar from "./components/Topbar.jsx";
import Reddit from "./components/Reddit.jsx";

function App() {
  const [sub, setSub] = useState(null);
  return (
    <div className="App">
      <Topbar setReddit={(sub) => setSub(sub)} />
      <Reddit subReddit={sub} />
    </div>
  );
}

export default App;
