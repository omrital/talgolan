import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import React from "react";

type ImageGalleryItem = {
    imageSrc: string;
    onClick: () => void;
}

type Props = {
    items: ImageGalleryItem[];
}

function renderItems(items: ImageGalleryItem[]) {
    return items.map((imageItem: ImageGalleryItem) => {
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

export function renderImagesGalleryExample(onClickFirstItem?: () => void) {
    const items: ImageGalleryItem[] = [
        {imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg", onClick: () => onClickFirstItem && onClickFirstItem()},
        {imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg", onClick: () => window.alert("image gallery item clicked")},
        {imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg", onClick: () => window.alert("image gallery item clicked")},
        {imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg", onClick: () => window.alert("image gallery item clicked")},
        {imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg", onClick: () => window.alert("image gallery item clicked")},
        {imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg", onClick: () => window.alert("image gallery item clicked")},
    ];
    return (
        <ImagesGallery items={items}/>
    );
}
