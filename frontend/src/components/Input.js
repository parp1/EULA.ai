import React, { Component } from "react";
import styled from "@emotion/styled";
import { colors } from "../constants/styles";

const Input = () => {
    return (
        <Container>
            Input box
        </Container>
    );
}

const Container = styled("div")`
    height: 100%;
    width: 36vw;
    background-color: ${colors.WHITE};
    /* border: 1px solid red; */
`;

export default Input;