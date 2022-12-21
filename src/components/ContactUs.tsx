import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, {ChangeEventHandler, useState} from "react";
import {Form, InputGroup} from "react-bootstrap";

type Props = {
    onSendClick: (data: {name: string, phone: string, email: string}) => void;
}

export const ContactUs = (props: Props) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const inputContactUs = (placeholder: string, value: string, onChange: (event: any) => void) => {
        return (
            <Col sm>
                <InputGroup size={"lg"}>
                    <Form.Control
                        style={{textAlign: "right", direction: "rtl", alignSelf: "center"}}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                </InputGroup>
            </Col>
        );
    }
    const {onSendClick} = props;
    return (
        <Row style={{direction: "rtl", alignItems: "center", backgroundColor: "gray", padding: "7px"}} xs={1} sm={1} md={1} lg={5} xl={5} xxl={5}>
            {<Col className={"Col4"} sm><div className="FooterTextView">לתיאום פגישה</div></Col>}
            {inputContactUs("שם מלא", name, (event) => setName(event.target.value))}
            {inputContactUs("טלפון", phone, (event) => setPhone(event.target.value))}
            {inputContactUs("אימייל", email, (event) => setEmail(event.target.value))}
            {<Col className={"Col5"} sm onClick={() => onSendClick && onSendClick({name, email, phone})}><div className="FooterTextView">שליחה</div></Col>}
        </Row>
    );
}
