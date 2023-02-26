import Col from "react-bootstrap/Col";
import React from "react";

type Props = {
    title: string;
    backgroundImage: string;
}

export const TitleBig = (props: Props) => {
    const {title, backgroundImage} = props;
    return (
        <Col
            style={{backgroundImage: `url("${backgroundImage}")`,}}
            className="TitleBig"
            sm>{title}</Col>
    );
}

export function renderTitleBigExample() {
    return <TitleBig
        title={"כלים סניטריים"}
        backgroundImage={"big-title-background.png"}
    ></TitleBig>
}

