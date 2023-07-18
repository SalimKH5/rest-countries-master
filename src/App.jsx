import "./App.css"
import Main from "./Main/Main";
import Navbar from "./Component/Navbar/Navbar";
import { useRef } from "react";


function App() {
  const containerApp = useRef(null);
  return (
    <div className="App" ref={containerApp}>
      <Navbar containerApp={containerApp}/>
      <Main/>
    </div>
  );
}

export default App;
