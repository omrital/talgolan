import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import {ImageDataItem} from "./types";
import React from "react";

type Props = {
    items: ImageDataItem[];
}

function renderItems(items: ImageDataItem[]) {
    return items.map((imageItem: ImageDataItem) => {
        const {imageSrc, onClick} = imageItem;
        return (
            <Image className="Image" onClick={onClick} src={imageSrc}></Image>
        )
    });
}

export const ImagesGallery = (props: Props) => {
    const {items} = props;
    if (!items) {
        return null;
    }
    return (
        <Row xs={2} sm={3} md={3} lg={4} xl={4} xxl={4}>
            {renderItems(items)}
        </Row>
    );
}
