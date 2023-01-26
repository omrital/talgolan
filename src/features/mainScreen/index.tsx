import {ImagesGallery, ImageGalleryItem} from "../../components/ImagesGallery";
import {ContactUs} from "../../components/ContactUs";
import '../../components/BootstrapExamples.css';
import {HeaderTG} from "./components/HeaderTG";
import {FooterTG} from "./components/FooterTG";
import React from 'react';

function renderImagesGallery() {
    const items: ImageGalleryItem[] = [
        {imageSrc: "image_demo_1.jpg", onClick: () => window.alert("image gallery item clicked")},
        {imageSrc: "image_demo_2.jpg", onClick: () => window.alert("image gallery item clicked")},
        {imageSrc: "image_demo_3.jpg", onClick: () => window.alert("image gallery item clicked")},
        {imageSrc: "image_demo_4.jpg", onClick: () => window.alert("image gallery item clicked")},
        // {imageSrc: "image_demo_5.jpg", onClick: () => window.alert("image gallery item clicked")},
        // {imageSrc: "image_demo_6.jpg", onClick: () => window.alert("image gallery item clicked")},
    ];
    return (
        <div style={{margin: "5px"}}>
            <ImagesGallery items={items}/>
        </div>
    );
}

const renderContactUs = () => {
    return (
        <ContactUs
            onSendClick={(data: {name: string, phone: string, email: string}) => {
                window.alert(`Send click with name: ${data.name}, phone: ${data.phone}, email: ${data.email}.`)
            }}
        />
    );
}

function MainScreen() {
    return (
        <div className="Container">
            <HeaderTG/>
            {renderImagesGallery()}
            {renderContactUs()}
            <FooterTG/>
        </div>
    );
}

export default MainScreen;
