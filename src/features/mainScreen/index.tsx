import {renderImagesGalleryExample} from "../../components/ImagesGallery";
import {ContactUs} from "../../components/ContactUs";
import '../../components/BootstrapExamples.css';
import {HeaderTG} from "./components/HeaderTG";
import {FooterTG} from "./components/FooterTG";
import React from 'react';

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
            {renderImagesGalleryExample()}
            {renderContactUs()}
            <FooterTG/>
        </div>
    );
}

export default MainScreen;
