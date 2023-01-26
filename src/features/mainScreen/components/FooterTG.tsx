import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";
import {ButtonInfo, renderButtonInfoExample} from "../../../components/ButtonInfo";

function renderPhoneRow() {
    return (
        <ButtonInfo
            title={"04-673-4646"}
            icon={"icon_phone.svg"}
            className={"Col7"}
            onClick={() => {
                window.alert(`phone click`)
            }}
        />
    );
}

function renderAddressRow() {
    return (
        <ButtonInfo
            title={"פארק תעשיות קדמת גליל"}
            icon={"icon_waze.svg"}
            className={"Col7"}
            onClick={() => {
                window.alert(`address click`)
            }}
        />
    );
}

function renderEmailRow() {
    return (
        <ButtonInfo
            title={"talgolan@gmail.com"}
            icon={"icon_email.svg"}
            className={"Col7"}
            onClick={() => {
                window.alert(`email click`)
            }}
        />
    );
}

function renderSocial() {
    return (
        <div style={{marginTop: "10px", marginBottom: "10px"}}>
            <div className="d-lg-none d-md-none" style={{width: "100%", height: "1px", backgroundColor: "gray", marginBottom: "30px"}}/>
            <object style={{height: "4vw", marginLeft: "15px", marginRight: "5px", minHeight: "20px", maxHeight: "45px"}} data={"icon_facebook.svg"} type="image/svg+xml"/>
            <object style={{height: "4vw", marginLeft: "15px", marginRight: "5px", minHeight: "20px", maxHeight: "45px"}} data={"icon_instagram.svg"} type="image/svg+xml"/>
            <object style={{height: "4vw", marginLeft: "15px", marginRight: "5px", minHeight: "20px", maxHeight: "45px"}} data={"icon_whatsapp.svg"} type="image/svg+xml"/>
        </div>
    );
}

function renderBusinessInfoRows() {
    return (
        <Col>
            {renderAddressRow()}
            {renderEmailRow()}
            {renderPhoneRow()}
        </Col>
    );
}

export const FooterTG = () => {
    return(
        <Container fluid>
            <Row style={{backgroundColor: "white", direction: "rtl", alignItems: "center", padding: "5px"}} xs={1} sm={1} md={2} lg={3} xl={3} xxl={3}>
                <Col md={5} lg={5} xl={5} xxl={5}>
                    {renderBusinessInfoRows()}
                </Col>
                <Col md={5} lg={5} xl={5} xxl={5}>
                    {renderSocial()}
                </Col>
                <Col md={2} lg={2} xl={2} xxl={2}>
                    <img style={{height: "100%", width: "100%", margin: "5px", backgroundColor: "transparent", maxHeight: "150px", maxWidth: "150px"}} src={"logo_tg_portrait.png"} />
                </Col>
            </Row>
        </Container>
    );
}
