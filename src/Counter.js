import { useState } from "react";

function Counter() {
  const [result, setResult] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  function addOne() {
    console.log("Funkcija izsaukta");
    setResult(result + 1);
    console.log("result vērtība ir " + result);
  }

  // Reizināt rezultātu ar
  // lietotāja ievadītu skaitli

  function minusOne() {
    setResult(result - 1);
  }

  // Uztaisi pogu, kas izsauvc reizināšanu
  function multiply() {
    setResult(result * multiplier);
  }

  function handleChange(kaķēns) {
    setMultiplier(kaķēns.target.value);
  }

  return (
    <div>
      <button onClick={addOne}>+ 1</button>
      <button onClick={minusOne}>- 1</button>
      <input type="number" value={multiplier} onChange={handleChange} />
      <button onClick={multiply}>* {multiplier}</button>
      <h1>{result}</h1>
    </div>
  );
}

export default Counter;
