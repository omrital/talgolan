import {Header} from "./components/Header";
import Col from "react-bootstrap/Col";
import React from "react";
import Container from "react-bootstrap/Container";

export const MainScreen = () => {
    return(
        <Container fluid>
            <div className="Container">
                <Header/>
            </div>
        </Container>
    );
}
