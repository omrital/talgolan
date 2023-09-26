import {ImageCarouselItem} from "../../../components/ImagesCarousel";
import {BusinessCategory, BusinessItem} from "../types";
import {Category} from "../../../components/types";

const getCarouselItemsFromIndex = (items: BusinessItem[], index: number): ImageCarouselItem[] => {
    const uiItems = fromBusinessItemsToCarouselItems(items);

    if (index === 0) {
        return uiItems;
    }
    const itemsFromIndexToEnd = uiItems.slice(index);
    const itemsFromStartToIndex = uiItems.slice(0, index);
    return [...itemsFromIndexToEnd, ...itemsFromStartToIndex];
};

const fromBusinessItemsToCarouselItems = (items?: BusinessItem[]): ImageCarouselItem[] => {
    if (!items) {
        return [];
    }
    return items.map((item: BusinessItem): ImageCarouselItem => {
        return {
            title: item.title || '',
            description: item.description || '',
            imageSrc: item.imageUrl,
        };
    });
}

const fromBusinessCategoriesToUiCategoriesItems = (items?: BusinessCategory[]): Category[] => {
    if (!items) {
        return [];
    }
    return items.map((item: BusinessCategory): Category => {
        return {
            id: item.id,
            title: item.title || '',
        };
    });
}

export const dataConverter = {
    fromBusinessCategoriesToUiCategoriesItems,
    fromBusinessItemsToCarouselItems,
    getCarouselItemsFromIndex,
}