import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <div className="App">
      <h4>PAYMENT DETAILS</h4>
      <br />
      <form method="POST" className="form-container">
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={number}
          required
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <br />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={expiry}
          required
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <br />
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          required
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <br />

        <button type="submit" value="Submit">
          Confirm Payment
        </button>
      </form>
    </div>
  );
}

export default App;
