import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import React from "react";

type ImageData = {
    imageSrc: string;
    onClick: () => void;
}

type Props = {
    images: ImageData[];
}

function renderImages(images: ImageData[]) {
    return images.map((imageData: ImageData) => {
        const {imageSrc, onClick} = imageData;
        return (
            <Image className="Image" onClick={onClick} src={imageSrc}></Image>
        )
    });
}

export const ImagesGallery = (props: Props) => {
    const {images} = props;
    if (!images) {
        return null;
    }
    return (
        <Row xs={2} sm={3} md={3} lg={4} xl={4} xxl={4}>
            {renderImages(images)}
        </Row>
    );
}

export function renderImagesGalleryExample() {
    const images: ImageData[] = [
        {imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg", onClick: () => window.alert("image clicked")},
        {imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg", onClick: () => window.alert("image clicked")},
        {imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg", onClick: () => window.alert("image clicked")},
        {imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg", onClick: () => window.alert("image clicked")},
        {imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg", onClick: () => window.alert("image clicked")},
        {imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg", onClick: () => window.alert("image clicked")},
    ];
    return (
        <ImagesGallery images={images}/>
    );
}
