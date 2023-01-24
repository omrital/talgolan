import Carousel from "react-bootstrap/Carousel";
import React from "react";

export type ImageCarouselItem = {
    title: string;
    imageSrc: string;
    description: string;
    onClick: () => void;
}

export type ImagesCarouselProps = {
    isFullScreen: boolean;
    items: ImageCarouselItem[];
}

function renderItems(props: ImagesCarouselProps) {
    const {items, isFullScreen} = props;
    return items.map((imageData: ImageCarouselItem) => {
        const {title, description, imageSrc, onClick} = imageData;
        return (
            <Carousel.Item className={isFullScreen ? "CarouselImage2" : undefined}>
                <img
                    className={isFullScreen ? "CarouselImage2" : "CarouselImage"}
                    src={imageSrc}
                    alt="First slide"
                    onClick={onClick}
                />
                <Carousel.Caption>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    });
}

export const ImagesCarousel = (props: ImagesCarouselProps) => {
    const {items, isFullScreen} = props;
    if (!items) {
        return null;
    }
    return (
        <Carousel className={isFullScreen ? "Carousel2": "Carousel"}>
            {renderItems(props)}
        </Carousel>
    );
}

export function renderImagesCarouselExample() {
    const items: ImageCarouselItem[] = [
        {title: "Item 1 title", description: "Nulla vitae elit libero, a pharetra augue mollis interdum.", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg", onClick: () => window.alert("image carousel item clicked")},
        {title: "Item 2 title", description: "Nulla vitae elit libero, a pharetra augue mollis interdum.", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg", onClick: () => window.alert("image carousel item clicked")},
        {title: "Item 3 title", description: "Nulla vitae elit libero, a pharetra augue mollis interdum.", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rabbi_Yosef_Haim.jpg", onClick: () => window.alert("image carousel item clicked")},
    ];
    return (
        <ImagesCarousel items={items} isFullScreen={false}/>
    );
}
