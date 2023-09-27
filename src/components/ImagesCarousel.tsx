import Carousel from "react-bootstrap/Carousel";
import {ImageDataItem} from "./types";
import React from "react";

export type ImagesCarouselProps = {
    isFullScreen: boolean;
    items: ImageDataItem[];
}

function renderItems(props: ImagesCarouselProps) {
    const {items, isFullScreen} = props;
    return items.map((imageData: ImageDataItem) => {
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
        <Carousel className={isFullScreen ? "Carousel2": "Carousel"} interval={isFullScreen? null : 3000}>
            {renderItems(props)}
        </Carousel>
    );
}
