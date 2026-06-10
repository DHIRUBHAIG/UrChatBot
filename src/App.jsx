


import { useState, useEffect } from "react";
import "./App.css";

import Histry from "./components/RecentHistry/Histry";
import Chat from "./components/Main/Chat";

function App() {
  const [recentHistry, setRecentHistry] = useState([]);

  // Load history from localStorage
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("Histry")) || [];
    setRecentHistry(savedHistory);
  }, []);

  return (
    <div className="grid grid-cols-5">
      

      <Histry
  recentHistry={recentHistry}
  setRecentHistry={setRecentHistry}
/>

      <Chat
        recentHistry={recentHistry}
        setRecentHistry={setRecentHistry}
      />
    </div>
  );
}

export default App;
