import {renderImagesCarouselModalExample} from "../../components/ImagesCarouselModal";
import {renderCategoriesSmallExample} from "../../components/CategoriesSmall";
import {renderImagesCarouselExample} from "../../components/ImagesCarousel";
import {renderButtonContinueExample} from "../../components/ButtonContinue";
import {renderCategoriesBigExample} from "../../components/CategoriesBig";
import {renderImagesGalleryExample} from "../../components/ImagesGallery";
import {renderButtonInfoExample} from "../../components/ButtonInfo";
import BootstrapExamples from "../../components/BootstrapExamples";
import {renderContactUsExample} from "../../components/ContactUs";
import {renderTitleBigExample} from "../../components/TitleBig";
import React, {useState} from 'react';
import '../../components/BootstrapExamples.css';
import logo from "../../logo.svg";

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
