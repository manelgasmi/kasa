import { useState } from "react";
import "./App.scss";
import Navigation from "./navigation/navigation";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"; // Importing the Footer component

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Navigation />
      <Footer /> {/* Adding the Footer component */}
    </div>
  );
}

export default App;
