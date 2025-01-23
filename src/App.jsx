import { useState } from "react";
import "./App.scss";
import Navigation from "./navigation/navigation";

function App() {
  const [count, setCount] = useState(0);

  return <Navigation />;
}

export default App;
