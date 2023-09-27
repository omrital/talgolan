import Col from "react-bootstrap/Col";
import React from "react";

type Props = {
    title: string;
    icon: string;
    fallbackIcon?: string;
    onClick?: () => void;
    className?: string;
}

export const ButtonInfo = (props: Props) => {
    const {title, icon, fallbackIcon, onClick} = props;
    return (
        <Col className={props.className || "Col6"} onClick={onClick} sm>
            <div style={{display: "flex", flexDirection: "row", direction: "rtl", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                <object style={{height: "20px",width: "20px", marginLeft: "5px", marginRight: "5px"}} data={icon} type="image/svg+xml">
                    <img src={fallbackIcon} />
                </object>
                <div className="BtnInfoTextView">{title}</div>
            </div>
        </Col>
    );
}
