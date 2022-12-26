import Col from "react-bootstrap/Col";
import React from "react";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

type ImageData = {
    image: string;
    onClick: () => void;
}

type Props = {
    images: ImageData[];
}

export const ImagesGallery = (props: Props) => {
    const {images} = props;
    return (
        <Row xs={2} sm={3} md={3} lg={4} xl={4} xxl={4}>

            <Image className="Image" onClick={() => {
                // window.alert("click");
                // setShow(true);
            }} src={'https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg'}></Image>
            <Image className="Image" src={'https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg'}></Image>
            <Image className="Image" src={'https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg'}></Image>
            <Image className="Image" src={'https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg'}></Image>
            <Image className="Image" src={'https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg'}></Image>
            <Image className="Image" src={'https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg'}></Image>
        </Row>
    );
}

// export function renderImagesGalleryExample() {
//     return <ImagesGallery
//         title={"כלים סניטריים"}
//         backgroundImage={"big-title-background.png"}
//     ></ImagesGallery>
// }
