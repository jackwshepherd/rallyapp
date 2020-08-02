import React, { useState } from "react";
import Iframe from "react-iframe";
import logo from "../logo_white.png";
import "../index.css";
import Menu from "../menu";

function App() {
  const [route, setRoute] = useState("tutorial");
  const [id, setId] = useState("");
  return (
    <div className="container">
      <div className="header inverse">
        <img src={logo} className="logo nomenu" alt="Relay." />
      </div>
      <Iframe
        url={`https://demo.bryter.io/s/bvs5PLFeT4q70srZ5xm9bA/relay?route=return&id=4adc`}
        className="iframe"
        display="initial"
        position="relative"
      />
    </div>
  );
}

export default App;
