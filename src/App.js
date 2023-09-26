import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./component/Navbar";
import Register from "./component/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Register />
      </div>
    </Router>
  );
}

export default App;
