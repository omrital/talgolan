import {BusinessItem} from "../types";
import {ImageCarouselItem} from "../../../components/ImagesCarousel";

const getUiItemsFromIndex = (items: BusinessItem[], index: number): ImageCarouselItem[] => {
    const uiItems = fromBusinessItemsToUiItems(items);

    if (index === 0) {
        return uiItems;
    }
    const itemsFromIndexToEnd = uiItems.slice(index);
    const itemsFromStartToIndex = uiItems.slice(0, index);
    return [...itemsFromIndexToEnd, ...itemsFromStartToIndex];
};

const fromBusinessItemsToUiItems = (items: BusinessItem[]): ImageCarouselItem[] => {
    return items.map((item: BusinessItem, index: number): ImageCarouselItem => {
        return {
            title: item.title || '',
            description: item.description || '',
            imageSrc: item.imageUrl,
        };
    });
}

export const dataConverter = {
    fromBusinessItemsToUiItems,
    getUiItemsFromIndex,
}