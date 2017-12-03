import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import data from "./data.json";
import Ticket from "./Ticket";
import TicketList from "./TicketList";

class App extends Component {
    state = {
        N: 2
    };

    render() {
        const { N } = this.state;

        return (
            <TicketList tickets={data.events} N={N}>
                {({ info }) => <Ticket info={info} key={info.id} />}
            </TicketList>
        );
    }
}

export default App;
