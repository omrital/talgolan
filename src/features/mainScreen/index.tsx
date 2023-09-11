import {ImagesGallery, ImageGalleryItem} from "../../components/ImagesGallery";
import {ContactUs} from "../../components/ContactUs";
import '../../components/BootstrapExamples.css';
import {HeaderTG} from "./components/HeaderTG";
import {FooterTG} from "./components/FooterTG";
import React, {useState} from 'react';
import {ImageCarouselItem, ImagesCarousel} from "../../components/ImagesCarousel";
import {TitleBig} from "../../components/TitleBig";
import {ImagesCarouselModal} from "../../components/ImagesCarouselModal";
import {CategoriesSmall} from "../../components/CategoriesSmall";
import {businessData} from "./businessData";
import {BusinessItem} from "./types";
import {dataConverter} from "./services/dataConverter";

function MainScreen() {
    const [show, setShow] = useState(false);
    const [dialogImages, setDialogImages] = useState<ImageCarouselItem[]>([]);

    // const getImageUrlGoogleDriveId = (imageId: string) => {
    //     return `https://drive.google.com/uc?export=view&id=${imageId}`;
    // };

    const renderImagesCarousel = () => {
        const mainItems = businessData.mainCarouselItems;

        const items = mainItems.map((item: BusinessItem, index: number): ImageCarouselItem => {
            return {
                title: item.title || '',
                description: item.description || '',
                imageSrc: item.imageUrl,
                onClick: () => {
                    setDialogImages(dataConverter.getUiItemsFromIndex(mainItems, index));
                    setShow(true);
                },
            };
        });

        // const items: ImageCarouselItem[] = [
        //     {title: "Item 1 title", description: "aaaaaa", imageSrc: 'https://storage.googleapis.com/tilelove-bucket/2022/11/tileisrael3-42352.webp', onClick: () => setShow(true)},
        //     {title: "Item 2 title", description: "aaaaaa", imageSrc: "image_demo_2.jpg", onClick: () => setShow(true)},
        //     {title: "Item 3 title", description: "aaaaaa", imageSrc: "image_demo_3.jpg", onClick: () => setShow(true)},
        // ];
        return (
            <ImagesCarousel items={items} isFullScreen={false}/>
        );
    }

    const renderTitleBig = () => {
        return <TitleBig
            title={"אולם תצוגה"}
            backgroundImage={"big-title-background.png"}
        ></TitleBig>
    }

    function renderSubCategories() {
        const subCategories = [
            {id: "0", title: "מודרני", backgroundColor: "#EF9A9A"},
            {id: "1", title: "קלאסי", backgroundColor: "#F06292"},
            {id: "2", title: "כפרי", backgroundColor: "#AB47BC"},
            {id: "3", title: "תעשייתי", backgroundColor: "#673AB7"},
            {id: "4", title: "דמוי פרקט", backgroundColor: "#304FFE"},
            {id: "5", title: "חיפוי אבן", backgroundColor: "#00ACC1"},
        ];
        return (
            <CategoriesSmall
                categories={subCategories}
                selectedId={"3"}
                onClick={(id: string) => {window.alert("id \"" + id + "\" click")}}
            />
        );
    }

    const renderImagesGallery = () => {
        const items: ImageGalleryItem[] = [
            {imageSrc: "image_demo_1.jpg", onClick: () => setShow(true)},
            {imageSrc: "image_demo_2.jpg", onClick: () => setShow(true)},
            {imageSrc: "image_demo_3.jpg", onClick: () => setShow(true)},
            {imageSrc: "image_demo_4.jpg", onClick: () => setShow(true)},
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

    const renderImagesCarouselModal = () => {
        // const items: ImageCarouselItem[] = [
        //     {title: "Item 1", description: "aaa.", imageSrc: "image_demo_4.jpg"},
        //     {title: "Item 2", description: "aaa.", imageSrc: "image_demo_5.jpg"},
        //     {title: "Item 3", description: "aaa.", imageSrc: "image_demo_6.jpg"},
        // ];
        return (
            <ImagesCarouselModal items={dialogImages} onDismiss={() => setShow(false)}/>
        );
    }

    return (
        <div className="Container">
            <HeaderTG/>
            {renderImagesCarousel()}
            {renderTitleBig()}
            {renderSubCategories()}
            {renderImagesGallery()}
            {renderContactUs()}
            {show && renderImagesCarouselModal()}
            <FooterTG/>
        </div>
    );
}

export default MainScreen;
