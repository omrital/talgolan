import Col from "react-bootstrap/Col";
import React from "react";

type Props = {
    title: string;
    backgroundImage: string;
}

export const TitleBig = (props: Props) => {
    const {title} = props;
    return (
        <div>
            <div style={{background: "#CCC", height: "1px", width: "100%"}}></div>
            <Col
                style={{background: "#EEEEFF"}}
                className="TitleBig"
                sm>{title}
            </Col>
            <div style={{background: "#CCC", height: "1px", width: "100%"}}></div>
        </div>
    );
}

export function renderTitleBigExample() {
    return <TitleBig
        title={"כלים סניטריים"}
        backgroundImage={"big-title-background.png"}
    ></TitleBig>
}

