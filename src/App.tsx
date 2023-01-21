import { useState, ChangeEvent } from "react";
import "./App.css";
import Button from "./components/atom/button";
import CheckBox from "./components/atom/checkbox/checkbox";

function App() {
  const [check, setCheck] = useState(false);
  const checkHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    setCheck(e.target.checked);
  };
  return (
    <div className="App">
      <Button onClick={() => console.log("Button Clicked")}>버튼</Button>
      <CheckBox checkHandle={checkHandle} checked={check}>
        다음 약관에 모두 동의
      </CheckBox>
    </div>
  );
}

export default App;
