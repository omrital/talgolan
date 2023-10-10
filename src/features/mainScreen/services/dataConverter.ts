import {Category, ImageDataItem} from "../../../components/types";
import {BusinessCategory, BusinessItem} from "../types";

const getCarouselItemsFromIndex = (items: BusinessItem[], index: number): ImageDataItem[] => {
    const uiItems = fromBusinessItemsToCarouselItems(items);

    if (index === 0) {
        return uiItems;
    }
    const itemsFromIndexToEnd = uiItems.slice(index);
    const itemsFromStartToIndex = uiItems.slice(0, index);
    return [...itemsFromIndexToEnd, ...itemsFromStartToIndex];
};

const fromBusinessItemsToCarouselItems = (items?: BusinessItem[]): ImageDataItem[] => {
    if (!items) {
        return [];
    }
    return items.map((item: BusinessItem): ImageDataItem => {
        return {
            title: item.title || '',
            description: item.description || '',
            imageSrc: item.imageUrl,
        };
    });
}

const fromBusinessCategoriesToUiCategoriesItems = (items?: BusinessCategory[]): Category[] | undefined => {
    if (!items) {
        return undefined;
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