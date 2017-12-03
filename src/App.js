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

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

class App extends Component {
    state = {
        N: 2,
        hidden: []
    };

    more = () =>
        this.setState({
            N: this.state.N + 1
        });

    fewer = () =>
        this.setState({
            N: this.state.N - 1
        });

    hideTicket = ({ id }) =>
        this.setState({ hidden: [...this.state.hidden, id] });

    render() {
        const { N } = this.state;

        return (
            <Container>
                <Row>
                    <Button onClick={this.more} label="More Tickets" />
                    {N > 0 ? (
                        <Button onClick={this.fewer} label="Fewer Tickets" />
                    ) : null}
                </Row>
                <TicketList
                    tickets={data.events.filter(
                        ({ id }) => !this.state.hidden.includes(id)
                    )}
                    N={N}
                    onHide={this.hideTicket}
                >
                    {({ info, onHide }) => (
                        <Ticket info={info} key={info.id} onHide={onHide} />
                    )}
                </TicketList>
            </Container>
        );
    }
}

export default App;
