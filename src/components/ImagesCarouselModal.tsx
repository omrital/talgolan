import {ImageCarouselItem, ImagesCarousel} from "./ImagesCarousel";
import React, {useState} from "react";

export type ImagesCarouselModalProps = {
    items: ImageCarouselItem[];
}

export const ImagesCarouselModal = (props: ImagesCarouselModalProps) => {
    const {items} = props;
    const [show, setShow] = useState(true);

    if (!items || !show) {
        return null;
    }
    return (
        <div className="ModalBackground" onClick={() => setShow(false)}>
            <div className="Modal" onClick={(event) => {
                event.stopPropagation()
            }}>
                <div className={"Modal2"}>
                    <div onClick={() => setShow(false)} style={{height: "50px", width: "100%", alignItems: "center", display: "flex", justifyContent: "end", paddingTop: "25px", paddingRight: "25px"}}>
                        <p style={{fontSize: '18sp'}}>
                            <span style={{fontWeight: 'bold'}}>X</span>
                        </p>
                    </div>
                    <ImagesCarousel items={items} isFullScreen={true}/>
                </div>
            </div>
        </div>
    );
}

export function renderImagesCarouselModalExample() {
    const items: ImageCarouselItem[] = [
        {title: "Item 1 title", description: "Nulla vitae elit libero, a pharetra augue mollis interdum.", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg", onClick: () => window.alert("image carousel item clicked")},
        {title: "Item 2 title", description: "Nulla vitae elit libero, a pharetra augue mollis interdum.", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg", onClick: () => window.alert("image carousel item clicked")},
        {title: "Item 3 title", description: "Nulla vitae elit libero, a pharetra augue mollis interdum.", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg", onClick: () => window.alert("image carousel item clicked")},
    ];
    return (
        <ImagesCarouselModal items={items}/>
    );
}
