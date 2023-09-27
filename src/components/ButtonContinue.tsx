import Col from "react-bootstrap/Col";
import React from "react";

type Props = {
    title: string;
    onClick: () => void;
}

export const ButtonContinue = (props: Props) => {
    const {title, onClick} = props;
    return (
        <Col className="ButtonContinue" sm onClick={onClick}>{title}</Col>
    );
}
