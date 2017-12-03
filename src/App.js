import React, { Component } from "react";
import styled from "styled-components";

import data from "./data.json";
import Ticket from "./Ticket";
import TicketList from "./TicketList";
import { Button } from "./FormElements";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 960px;
    margin: 0 auto;
    align-items: center;
    padding-top: 30px;
`;

class App extends Component {
    state = {
        N: 2
    };

    addMore = () =>
        this.setState({
            N: this.state.N + 1
        });

    render() {
        const { N } = this.state;

        return (
            <Container>
                <Button onClick={this.addMore} label="More Tickets" />
                <TicketList tickets={data.events} N={N}>
                    {({ info }) => <Ticket info={info} key={info.id} />}
                </TicketList>
            </Container>
        );
    }
}

export default App;
