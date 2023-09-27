import {ImagesCarousel} from "./ImagesCarousel";
import React, {useState} from "react";
import {ImageDataItem} from "./types";

export type ImagesCarouselModalProps = {
    items: ImageDataItem[];
    onDismiss?: () => void;
}

export const ImagesCarouselModal = (props: ImagesCarouselModalProps) => {
    const {items, onDismiss} = props;
    const [show, setShow] = useState(true);

    const dismiss = () => {
        setShow(false)
        onDismiss && onDismiss();
    };

    if (!items || !show) {
        return null;
    }
    return (
        <div className="ModalBackground" onClick={() => dismiss()}>
            <div className="Modal" onClick={(event) => {
                event.stopPropagation()
            }}>
                <div className={"Modal2"}>
                    <div onClick={() => dismiss()} style={{height: "50px", width: "100%", alignItems: "center", display: "flex", justifyContent: "end", paddingTop: "25px", paddingRight: "25px"}}>
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
