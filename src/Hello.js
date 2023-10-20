import { useState } from "react";

function Hello() {
  const [name, setName] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleNameChange}></input>
      <h1>Hello, {name}!</h1>
    </div>
  );
}
export default Hello;
