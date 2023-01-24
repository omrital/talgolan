import {renderImagesCarouselModalExample} from "./ImagesCarouselModal";
import {renderCategoriesSmallExample} from "./CategoriesSmall";
import {renderImagesCarouselExample} from "./ImagesCarousel";
import {renderButtonContinueExample} from "./ButtonContinue";
import {renderCategoriesBigExample} from "./CategoriesBig";
import {renderImagesGalleryExample} from "./ImagesGallery";
import {renderButtonInfoExample} from "./ButtonInfo";
import BootstrapExamples from "./BootstrapExamples";
import {renderContactUsExample} from "./ContactUs";
import {renderTitleBigExample} from "./TitleBig";
import React, {useState} from 'react';
import './BootstrapExamples.css';
import logo from "../logo.svg";

function Demo() {
    const [show, setShow] = useState(false);
    return (
        <div className="Container">
            {renderCategoriesSmallExample()}

            {divider()}

            {renderCategoriesBigExample()}

            {divider()}

            {renderImagesGalleryExample(() => setShow(true))}

            {divider()}

            {renderImagesCarouselExample()}

            {divider()}

            {show && renderImagesCarouselModalExample()}

            {divider()}

            {renderTitleBigExample()}

            {divider()}

            {renderButtonContinueExample()}

            {divider()}

            {renderContactUsExample()}

            {divider()}

            {renderButtonInfoExample()}

            {divider()}

            <BootstrapExamples/>

        </div>
    );
}

function divider() {
    return (
        <img src={logo} className="App-logo" alt="logo"/>
    );
}

export default Demo;
