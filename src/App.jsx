import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("hello from useEffect");
  }, [count]);

  return (
    <>
      <h1>useEffect Gudied Practice</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
