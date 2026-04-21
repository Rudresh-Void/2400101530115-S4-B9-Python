import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount]=useState(0);
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");
  const [c,s]=useState(0);

  const incre=()=> {
    setCount(p=>p+1);
  };
  const decre=()=>{
    setCount(p=>p-1);
  };
  const reset=()=>{
    setCount(0);
  };
  const toggleText = () => {
    setShow(pr=>!pr);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const L=()=> {
    s(p=>p+1);
  };
  const D=()=>{
    s(p=>p-1);
  };

  return (
    <div>
      <button onClick={decre}>-</button>
      <button onClick={incre}>+</button>
      <button onClick={reset}>Reset</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <br /><br />
      <button onClick={toggleText}>
        {show ? "Hide":"Show"}
      </button>
      {show && <p>MAGIC</p>}
      <br /><br />
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Type something..."
      />
      <p>USER:{text}</p>
      <button onClick={L}>Like</button>
      <button onClick={D}>Dislike</button>
      <span style={{ margin: "0 10px" }}>{c}</span>
    </div>
  );
}

export default App
