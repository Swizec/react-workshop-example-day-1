import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
    font-size: 14px;
    outline: 0;
    padding: 0.5em 2em;
    color: #fff;
    background-color: #6496c8;
    border: none;
    border-radius: 15px;
    box-shadow: 0 5px #27496d;
    cursor: pointer;
    &:hover {
        background-color: #417cb8;
    }
    &:active {
        background-color: #417cb8;
        box-shadow: 0 2px #27496d;
        transform: translateY(5px);
    }
    &[disabled] {
        background-color: lightgrey;
        box-shadow: 0 2px darkgrey;
    }
`;

const Button = ({ onClick, label, ...rest }) => (
    <ButtonStyle onClick={onClick} {...rest}>
        {label}
    </ButtonStyle>
);

export { Button };
