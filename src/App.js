import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {

  const [pass1, setPass1] = useState();
  const [pass2, setPass2] = useState();
  const [result, setresult] = useState('');
  console.log(pass1, pass2);

  const handler = () => {
    if (pass1 === pass2) {
        console.log("matched");
      setresult("password-matched")
    }
    
    else {
      console.log("mis-matched");
      setresult("password-mismatched")
      }
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input value={pass1} onChange={(e)=>setPass1(e.target.value)}/>
      <input value={pass2} onChange={(e)=>setPass2(e.target.value)}/>
     
      <button onClick={handler}>check</button>
      <p>{result}</p>
    </div>
  );
}
