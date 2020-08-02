import React, { useState } from "react";
import Iframe from "react-iframe";
import logo from "../logo.png";
import "../index.css";
import Menu from "../menu";

function App() {
  const [route, setRoute] = useState("tutorial");
  const [requestsExist, setRequestsExist] = useState("false");
  const [rand, setRand] = useState(Math.random());

  const requestInfo =
    "&advisor1=Freshfields&advisor2=Linklaters&advisor3=Clifford Chance";

  return (
    <div className="container">
      <div className="header">
        <img
          src={logo}
          className="logo"
          alt="Relay."
          onClick={() => setRand(Math.random())}
        />
        <div className="row">
          <Menu
            name="Requests"
            route="requests"
            setRoute={setRoute}
            active={route === "requests"}
          />
          <Menu
            name="Tutorial"
            route="tutorial"
            setRoute={setRoute}
            active={route === "tutorial"}
          />
          <Menu
            name="+ New Request"
            route="create"
            setRoute={setRoute}
            setRequestsExist={() => setRequestsExist("true")}
            type="primary"
          />
        </div>
      </div>
      <Iframe
        url={`https://demo.bryter.io/s/bvs5PLFeT4q70srZ5xm9bA/relay?rand=${rand}&route=${route}&requests_exist=${requestsExist}${
          !requestsExist || requestInfo
        }`}
        className="iframe"
        display="initial"
        position="relative"
      />
    </div>
  );
}

export default App;
