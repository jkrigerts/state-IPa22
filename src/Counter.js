import { useState } from "react";

function Counter() {
  const [result, setResult] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [delta, setDelta] = useState(1);

  function addDelta() {
    console.log("Funkcija izsaukta");
    setResult(result + parseInt(delta));
    console.log("result vērtība ir " + result);
  }
  // Reizināt rezultātu ar
  // lietotāja ievadītu skaitli

  // Uztaisi vēl vienu input, lai
  // var mainīt pieskaitāmo un atņemamo vērtību
  function minusDelta() {
    setResult(result - delta);
  }

  // Uztaisi pogu, kas izsauvc reizināšanu
  function multiply() {
    setResult(result * multiplier);
  }

  function handleChange(kaķēns) {
    setMultiplier(kaķēns.target.value);
  }

  function handleDelta(event) {
    setDelta(event.target.value);
  }

  return (
    <div>
      <input type="number" value={delta} onChange={handleDelta}></input>
      <button onClick={addDelta}>+ {delta}</button>
      <button onClick={minusDelta}>- {delta}</button>
      <input type="number" value={multiplier} onChange={handleChange} />
      <button onClick={multiply}>* {multiplier}</button>
      <h1>{result}</h1>
    </div>
  );
}

export default Counter;

// Uztaisi komponenti Hello
// Tajā ir input, kur ieraksti cilvēka vārdu
// Un apakšā parādās teskts: "Hello, vārds!"

// Uztaisi tādas 2 komponentes uz ekrāna

// Uztaisi ka ir masīvs ar cilvēku vārdiem un
// katram vārdam uztaisās Hello komponente ar to
// vārdu.

// Uzdevumu saraksta projektā izmanto useState pie completed
