import React from "react";
import "./App.css";
import TestHeader from "./TestHeader";

function App() {
  return (
    <div className="App">
      <TestHeader isLogin={true} userID="jiwon" />
    </div>
  );
}

export default App;
