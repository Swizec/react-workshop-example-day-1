import React, { Component } from "react";
import styled from "styled-components";
import format from "date-fns/format";

const TicketStyle = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    align-items: center;
`;

const TicketMeta = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px;
`;

const Thumbnail = styled.img`
    display: flex;
    flex: 1;
    width: 350px;
`;

class Ticket extends Component {
    render() {
        const { images, name, eventDateLocal, description } = this.props.info;

        return (
            <TicketStyle>
                <Thumbnail src={images[0].url} />
                <TicketMeta>
                    <h2>{name}</h2>
                    <p>
                        {format(
                            new Date(eventDateLocal),
                            "ddd Do MMMM, hh:mma"
                        )}
                    </p>
                    <p>{description}</p>
                </TicketMeta>
            </TicketStyle>
        );
    }
}

export default Ticket;
