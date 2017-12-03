import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import data from "./data.json";
import Ticket from "./Ticket";

class App extends Component {
    render() {
        return <Ticket info={data.events[0]} />;
    }
}

export default App;
