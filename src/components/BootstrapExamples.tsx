import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BootstrapExamples.css';
import logo from "../logo.svg";

function BootstrapExamples() {
    return (
        <div>
            <Row xs={2}>
                <Col className="Col" sm>sm=true1</Col>
                <Col className="Col" sm>sm=true2</Col>
                <Col className="Col" sm>sm=true3</Col>
                <Col className="Col" sm>sm=true4</Col>
                <Col className="Col" sm>sm=true5</Col>
                <Col className="Col" sm>sm=true6</Col>
                <Col className="Col" sm>sm=true7</Col>
                <Col className="Col" sm>sm=true8</Col>
            </Row>
            {divider()}
            <Row>
                <Col className="Col">1 of 2</Col>
                <Col className="Col">2 of 2</Col>
            </Row>
            {divider()}
            <Row>
                <Col className="Col">1 of 3</Col>
                <Col className="Col">2 of 3</Col>
                <Col className="Col">3 of 3</Col>
            </Row>
            {divider()}
            <Row>
                <Col className="Col">1 of 3</Col>
                <Col className="Col" xs={6}>2 of 3 (wider)</Col>
                <Col className="Col">3 of 3</Col>
            </Row>
            {divider()}
            <Row>
                <Col className="Col">1 of 3</Col>
                <Col className="Col" xs={5}>2 of 3 (wider)</Col>
                <Col className="Col">3 of 3</Col>
            </Row>
            {divider()}
            <Row className="justify-content-md-center">
                <Col className="Col" xs lg="2">
                    1 of 3
                </Col>
                <Col className="Col" md="auto">Variable width content</Col>
                <Col className="Col" xs lg="2">
                    3 of 3
                </Col>
            </Row>
            {divider()}
            <Row>
                <Col className="Col">1 of 3</Col>
                <Col className="Col" md="auto">Variable width content</Col>
                <Col className="Col" xs lg="2">
                    3 of 3
                </Col>
            </Row>
            {divider()}
            <Row>
                <Col className="Col" sm={8}>sm=8</Col>
                <Col className="Col" sm={4}>sm=4</Col>
            </Row>
            {divider()}
            <Row>
                <Col className="Col" xs={12} md={8}>
                    xs=12 md=8
                </Col>
                <Col className="Col" xs={6} md={4}>
                    xs=6 md=4
                </Col>
            </Row>
            {divider()}
            <Row>
                <Col className="Col" xs={6} md={4}>
                    xs=6 md=4
                </Col>
                <Col className="Col" xs={6} md={4}>
                    xs=6 md=4
                </Col>
                <Col className="Col" xs={6} md={4}>
                    xs=6 md=4
                </Col>
            </Row>
            {divider()}
            <Row>
                <Col className="Col" xs={6}>xs=6</Col>
                <Col className="Col" xs={6}>xs=6</Col>
            </Row>
            {divider()}
            <Row>
                <Col className="Col" xs>First, but unordered</Col>
                <Col className="Col" xs={{order: 12}}>Second, but last</Col>
                <Col className="Col" xs={{order: 1}}>Third, but second</Col>
            </Row>
            {divider()}
            <Row>
                <Col className="Col" xs={{order: 'last'}}>First, but last</Col>
                <Col className="Col" xs>Second, but unordered</Col>
                <Col className="Col" xs={{order: 'first'}}>Third, but first</Col>
            </Row>
            {divider()}
            <Row>
                <Col className="Col" md={4}>md=4</Col>
                <Col className="Col" md={{span: 4, offset: 4}}>{`md={{ span: 4, offset: 4 }}`}</Col>
            </Row>
            {divider()}
            <Row>
                <Col className="Col" md={{span: 3, offset: 3}}>{`md={{ span: 3, offset: 3 }}`}</Col>
                <Col className="Col" md={{span: 3, offset: 3}}>{`md={{ span: 3, offset: 3 }}`}</Col>
            </Row>
            {divider()}
            <Row>
                <Col className="Col" md={{span: 9, offset: 3}}>{`md={{ span: 6, offset: 3 }}`}</Col>
            </Row>
            {divider()}
            <Row xs={2} md={4} lg={6}>
                <Col className="Col">1 of 2</Col>
                <Col className="Col">2 of 2</Col>
            </Row>
            {divider()}
            <Row xs={1} md={2}>
                <Col className="Col">1 of 3</Col>
                <Col className="Col">2 of 3</Col>
                <Col className="Col">3 of 3</Col>
            </Row>
            {divider()}
            <Row xs="auto">
                <Col className="Col">1 of 3</Col>
                <Col className="Col">2 of 3</Col>
                <Col className="Col">3 of 3</Col>
            </Row>
            {divider()}
            <Row md={4}>
                <Col className="Col">1 of 3</Col>
                <Col className="Col" xs={6}>2 of 3</Col>
                <Col className="Col">3 of 3</Col>
            </Row>
            {divider()}
        </div>
    );
}

function divider() {
    return (
        <img src={logo} className="App-logo" alt="logo"/>
    );
}

export default BootstrapExamples;
