import { useState } from "react";
import "./App.scss";
import Navigation from "./navigation/navigation";

import Footer from "./components/footer/Footer"; 

function App() {
  

  return (
    <div className="App">
      
      <Navigation />
      <Footer /> 
    </div>
  );
}

export default App;
