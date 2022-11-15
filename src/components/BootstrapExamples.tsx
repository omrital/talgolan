import {renderCategoriesSmallExample} from "./CategoriesSmall";
import {renderCategoriesBigExample} from "./CategoriesBig";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BootstrapExamples.css';
import logo from "../logo.svg";

function BootstrapExamples() {
    const [show, setShow] = useState(false);

    function ImageDisplayModal() {
        if (!show) {
            return null;
        }
        return (
            <div className="ModalBackground" onClick={() => setShow(false)}>
                <div className="Modal" onClick={(event) => {
                    event.stopPropagation()
                    // window.alert("kkk")
                }}>
                    <div className={"Modal2"}>
                        <div onClick={() => setShow(false)} style={{height: "50px", width: "100%", alignItems: "center", display: "flex", justifyContent: "end", paddingTop: "25px", paddingRight: "25px"}}>
                            <p style={{fontSize: '18sp'}}>
                                <span style={{fontWeight: 'bold'}}>X</span>
                            </p>
                        </div>
                        {renderImageDisplay(true)}
                    </div>
                </div>
            </div>
        );
    }

    function Gallery() {
        return (
            <Row xs={2} sm={3} md={3} lg={4} xl={4} xxl={4}>
                <Image className="Image" onClick={() => {
                    // window.alert("click");
                    setShow(true);
                }} src={'https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg'}></Image>
                <Image className="Image" src={'https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg'}></Image>
                <Image className="Image" src={'https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg'}></Image>
                <Image className="Image" src={'https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg'}></Image>
                <Image className="Image" src={'https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg'}></Image>
                <Image className="Image" src={'https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg'}></Image>
            </Row>
        );
    }

    return (
    <div className="Container">
      {renderCategoriesSmallExample()}
      {divider()}
      {renderCategoriesBigExample()}
      {divider()}
      {Gallery()}
      {divider()}
      {renderImageDisplay(false)}
      {divider()}
      {/*{show && ImageDisplayModal1(show, setShow)}*/}
      {ImageDisplayModal()}
      {divider()}
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
         <Col className="Col"  xs lg="2">
          1 of 3
        </Col>
         <Col className="Col"  md="auto">Variable width content</Col>
         <Col className="Col"  xs lg="2">
          3 of 3
        </Col>
      </Row>
      {divider()}
      <Row>
         <Col className="Col" >1 of 3</Col>
         <Col className="Col"  md="auto">Variable width content</Col>
         <Col className="Col"  xs lg="2">
          3 of 3
        </Col>
      </Row>
      {divider()}
      <Row>
         <Col className="Col"  sm={8}>sm=8</Col>
         <Col className="Col"  sm={4}>sm=4</Col>
      </Row>
      {divider()}
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
         <Col className="Col"  xs={12} md={8}>
          xs=12 md=8
        </Col>
         <Col className="Col"  xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
      {divider()}
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
      {divider()}
      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
         <Col className="Col"  xs={6}>xs=6</Col>
         <Col className="Col"  xs={6}>xs=6</Col>
      </Row>
      {divider()}
      <Row>
         <Col className="Col"  xs>First, but unordered</Col>
         <Col className="Col"  xs={{ order: 12 }}>Second, but last</Col>
         <Col className="Col"  xs={{ order: 1 }}>Third, but second</Col>
      </Row>
      {divider()}
      <Row>
         <Col className="Col"  xs={{ order: 'last' }}>First, but last</Col>
         <Col className="Col"  xs>Second, but unordered</Col>
         <Col className="Col"  xs={{ order: 'first' }}>Third, but first</Col>
      </Row>
      {divider()}
      <Row>
         <Col className="Col"  md={4}>md=4</Col>
         <Col className="Col"  md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
      </Row>
      {divider()}
      <Row>
         <Col className="Col"  md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
         <Col className="Col"  md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
      </Row>
      {divider()}
      <Row>
         <Col className="Col"  md={{ span: 9, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
      </Row>
      {divider()}
      <Row xs={2} md={4} lg={6}>
         <Col className="Col" >1 of 2</Col>
         <Col className="Col" >2 of 2</Col>
      </Row>
      {divider()}
      <Row xs={1} md={2}>
         <Col className="Col" >1 of 3</Col>
         <Col className="Col" >2 of 3</Col>
         <Col className="Col" >3 of 3</Col>
      </Row>
      {divider()}
      <Row xs="auto">
         <Col className="Col" >1 of 3</Col>
         <Col className="Col" >2 of 3</Col>
         <Col className="Col" >3 of 3</Col>
      </Row>
      {divider()}
      <Row md={4}>
         <Col className="Col" >1 of 3</Col>
         <Col className="Col"  xs={6}>2 of 3</Col>
         <Col className="Col" >3 of 3</Col>
      </Row>
      {divider()}
    </div>
  );
}

function divider() {
  return (
    <img src={logo} className="App-logo" alt="logo" />
  );
}

function renderImageDisplay(isFullScreen: boolean) {
    return (
        <Carousel className={isFullScreen ? "Carousel2": "Carousel"}>
            <Carousel.Item className={isFullScreen ? "CarouselImage2" : undefined}>
                <img
                    className={isFullScreen ? "CarouselImage2" : "CarouselImage"}
                    src="https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="CarouselImage"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="CarouselImage"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default BootstrapExamples;
