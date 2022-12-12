import { React } from "react";
import "./components/css/App.css";
import Header from "./components/notepad/Head";
import Notes from "./components/notepad/Notes";


function App() {
  return (
    <div className="main">
      <div className="wrapper">
        <Header />
        <Notes />
      </div>
    </div>
  );
}
export default App;