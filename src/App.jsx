import { useState } from "react";
import "./css/global.css";
import Navbar from "./components/Navbar"; // Path sesuai lokasi komponen Navbar Anda

function App() {
  const [count, setCount] = useState(0);

  return  <Navbar />;
}

export default App;
