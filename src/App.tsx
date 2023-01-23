import { useState } from "react";
import classNames from "classnames";
import "./App.css";
import Button from "./components/atom/button";

function App() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <div className="App">
      <Button className={isActive ? "btn--active" : ""} onClick={handleClick}>
        Button
      </Button>
    </div>
  );
}

export default App;
