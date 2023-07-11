
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [val,setval] = useState(0);

  function counter(){
    return setval(val+1);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked <span>{val}</span> times</p>
        <button onClick={counter}>Click me</button>
    </div>
  )
}

export default App
