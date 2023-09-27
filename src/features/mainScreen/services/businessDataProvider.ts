import {businessData} from "../data/businessData";
import {dataConverter} from "./dataConverter";

const getCategoryForId = (id: string) => {
    const categories = businessData.categories;
    const category = categories.find(category => category.id === id);
    return category;
}

const getSubCategoriesForId = (id: string) => {
    const categories = businessData.categories;
    const currentCategory = categories.find(category => category.id === id);
    const subCategories = currentCategory?.subCategories;
    const subCategoriesUiData = dataConverter.fromBusinessCategoriesToUiCategoriesItems(subCategories);
    return subCategoriesUiData;
}

export const businessDataProvider = {
    getSubCategoriesForId,
    getCategoryForId,
}