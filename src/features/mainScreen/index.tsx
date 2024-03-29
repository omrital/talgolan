import {ImagesCarouselModal} from "../../components/ImagesCarouselModal";
import {businessDataProvider} from "./services/businessDataProvider";
import {CategoriesSmall} from "../../components/CategoriesSmall";
import {ImagesCarousel} from "../../components/ImagesCarousel";
import {ImagesGallery} from "../../components/ImagesGallery";
import {dataConverter} from "./services/dataConverter";
import {ContactUs} from "../../components/ContactUs";
import {ImageDataItem} from "../../components/types";
import {TitleBig} from "../../components/TitleBig";
import {BusinessItem, CategoryType} from "./types";
import {businessData} from "./data/businessData";
import '../../components/BootstrapExamples.css';
import {HeaderTG} from "./components/HeaderTG";
import {FooterTG} from "./components/FooterTG";
import React, {useState} from 'react';

function MainScreen() {
    const [show, setShow] = useState(false);
    const [dialogImages, setDialogImages] = useState<ImageDataItem[]>([]);
    const [mainCategory, setMainCategory] = useState<string>(CategoryType.CERAMIC);
    const [subCategory, setSubCategory] = useState<string>(CategoryType.CLASSIC);

    // const getImageUrlGoogleDriveId = (imageId: string) => {
    //     return `https://drive.google.com/uc?export=view&id=${imageId}`;
    // };

    const renderImagesCarousel = () => {
        const mainItems = businessData.mainCarouselItems;

        const items = mainItems.map((item: BusinessItem, index: number): ImageDataItem => {
            return {
                title: item.title || '',
                description: item.description || '',
                imageSrc: item.imageUrl,
                onClick: () => {
                    setDialogImages(dataConverter.getCarouselItemsFromIndex(mainItems, index));
                    setShow(true);
                },
            };
        });

        return (
            <ImagesCarousel items={items} isFullScreen={false}/>
        );
    }

    const renderTitleBig = () => {
        const currentCategory = businessDataProvider.getCategoryForId(mainCategory);
        return (
            <TitleBig
            title={currentCategory?.title ?? ""}
            backgroundImage={"big-title-background.png"}
            ></TitleBig>
        );
    }

    function renderSubCategories() {
        if (!subCategory) {
            return <></>;
        }
        const subCategoriesUiData = businessDataProvider.getSubCategoriesForId(mainCategory);

        return (
            <CategoriesSmall
                categories={subCategoriesUiData}
                selectedId={subCategory}
                onClick={(id: string) => { setSubCategory(id) }}
            />
        );
    }

    const renderImagesGallery = () => {
        const currentCategory = businessDataProvider.getCategoryForId(mainCategory);
        const currentSubCategory = currentCategory?.subCategories?.find(category => category.id === subCategory);
        const mainItems = currentSubCategory ? currentSubCategory.items : currentCategory?.items;

        const items2 = mainItems?.map((item: BusinessItem, index: number): ImageDataItem => {
            return {
                title: item.title || '',
                description: item.description || '',
                imageSrc: item.imageUrl,
                onClick: () => {
                    setDialogImages(dataConverter.getCarouselItemsFromIndex(mainItems, index));
                    setShow(true);
                },
            };
        });

        return (
            <div style={{margin: "5px"}}>
                <ImagesGallery items={items2 ?? []}/>
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
        return (
            <ImagesCarouselModal items={dialogImages} onDismiss={() => setShow(false)}/>
        );
    }

    return (
        <div className="Container">
            <HeaderTG
                selectedId={mainCategory}
                setSelectedId={ (selectedId: string) => {
                    const subCategories = businessDataProvider.getSubCategoriesForId(selectedId);
                    setMainCategory(selectedId);
                    setSubCategory(subCategories ? subCategories[0].id : '');
                }}
            />
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
