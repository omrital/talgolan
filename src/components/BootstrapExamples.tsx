import {renderCategoriesSmallExample} from "./CategoriesSmall";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BootstrapExamples.css';
import logo from "../logo.svg";
import React from "react";
import {renderCategoriesBigExample} from "./CategoriesBig";

function BootstrapExamples() {
  return (
    <Container className="Container">
      {renderCategoriesSmallExample()}
      {renderReactLogo()}
      {renderCategoriesBigExample()}
      {renderReactLogo()}
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
      {renderReactLogo()}
      <Row>
        <Col className="Col">1 of 2</Col>
        <Col className="Col">2 of 2</Col>
      </Row>
      {renderReactLogo()}
      <Row>
        <Col className="Col">1 of 3</Col>
        <Col className="Col">2 of 3</Col>
        <Col className="Col">3 of 3</Col>
      </Row>
      {renderReactLogo()}
      <Row>
         <Col className="Col">1 of 3</Col>
         <Col className="Col" xs={6}>2 of 3 (wider)</Col>
         <Col className="Col">3 of 3</Col>
      </Row>
      {renderReactLogo()}
      <Row>
         <Col className="Col">1 of 3</Col>
         <Col className="Col" xs={5}>2 of 3 (wider)</Col>
         <Col className="Col">3 of 3</Col>
      </Row>
      {renderReactLogo()}
      <Row className="justify-content-md-center">
         <Col className="Col"  xs lg="2">
          1 of 3
        </Col>
         <Col className="Col"  md="auto">Variable width content</Col>
         <Col className="Col"  xs lg="2">
          3 of 3
        </Col>
      </Row>
      {renderReactLogo()}
      <Row>
         <Col className="Col" >1 of 3</Col>
         <Col className="Col"  md="auto">Variable width content</Col>
         <Col className="Col"  xs lg="2">
          3 of 3
        </Col>
      </Row>
      {renderReactLogo()}
      <Row>
         <Col className="Col"  sm={8}>sm=8</Col>
         <Col className="Col"  sm={4}>sm=4</Col>
      </Row>
      {renderReactLogo()}
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
         <Col className="Col"  xs={12} md={8}>
          xs=12 md=8
        </Col>
         <Col className="Col"  xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
      {renderReactLogo()}
      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
         <Col className="Col"  xs={6} md={4}>
          xs=6 md=4
        </Col>
         <Col className="Col"  xs={6} md={4}>
          xs=6 md=4
        </Col>
         <Col className="Col"  xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
      {renderReactLogo()}
      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
         <Col className="Col"  xs={6}>xs=6</Col>
         <Col className="Col"  xs={6}>xs=6</Col>
      </Row>
      {renderReactLogo()}
      <Row>
         <Col className="Col"  xs>First, but unordered</Col>
         <Col className="Col"  xs={{ order: 12 }}>Second, but last</Col>
         <Col className="Col"  xs={{ order: 1 }}>Third, but second</Col>
      </Row>
      {renderReactLogo()}
      <Row>
         <Col className="Col"  xs={{ order: 'last' }}>First, but last</Col>
         <Col className="Col"  xs>Second, but unordered</Col>
         <Col className="Col"  xs={{ order: 'first' }}>Third, but first</Col>
      </Row>
      {renderReactLogo()}
      <Row>
         <Col className="Col"  md={4}>md=4</Col>
         <Col className="Col"  md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
      </Row>
      {renderReactLogo()}
      <Row>
         <Col className="Col"  md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
         <Col className="Col"  md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
      </Row>
      {renderReactLogo()}
      <Row>
         <Col className="Col"  md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
      </Row>
      {renderReactLogo()}
      <Row xs={2} md={4} lg={6}>
         <Col className="Col" >1 of 2</Col>
         <Col className="Col" >2 of 2</Col>
      </Row>
      {renderReactLogo()}
      <Row xs={1} md={2}>
         <Col className="Col" >1 of 3</Col>
         <Col className="Col" >2 of 3</Col>
         <Col className="Col" >3 of 3</Col>
      </Row>
      {renderReactLogo()}
      <Row xs="auto">
         <Col className="Col" >1 of 3</Col>
         <Col className="Col" >2 of 3</Col>
         <Col className="Col" >3 of 3</Col>
      </Row>
      {renderReactLogo()}
      <Row md={4}>
         <Col className="Col" >1 of 3</Col>
         <Col className="Col"  xs={6}>2 of 3</Col>
         <Col className="Col" >3 of 3</Col>
      </Row>
      {renderReactLogo()}
    </Container>
  );
}

function renderReactLogo() {
  return (
    <img src={logo} className="App-logo" alt="logo" />
  );
}

export default BootstrapExamples;
