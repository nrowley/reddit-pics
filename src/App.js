import React, { useState } from "react";
import "./App.css";
import Topbar from "./components/Topbar.jsx";
import Reddit from "./components/Reddit.jsx";

function App() {
  const [data, setData] = useState(null);
  return (
    <div className="App">
      <Topbar setReddit={(sub) => setData(sub)} />
      <Reddit subReddit={data} />
    </div>
  );
}

export default App;
