import React from "react";
import './App.css';
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM naming convertion
    <div className="app">
      <h1>Lets build an ANRAPP!</h1>

      <div className="app__body">
        <Sidebar />
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;
