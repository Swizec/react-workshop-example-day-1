import React from "react";
import styled from "styled-components";

const CenteredList = styled.div`
    display: flex;
    flex-direction: column;
    width: 960px;
    margin: 0 auto;
`;

const TicketList = ({ tickets, N, onHide, children }) => (
    <CenteredList>
        {tickets.slice(0, N).map(info => children({ info, onHide }))}
    </CenteredList>
);

export default TicketList;
