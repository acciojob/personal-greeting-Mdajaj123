
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [text, setText] = useState("");
  //   function setText() {
  //     setText(value);
  // }
  return (
    <div>
      <form action="">
        <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Input Something"  />
      </form>
      <p>Hello {text}!</p>
    </div>
  )
}

export default App
