export type BusinessData = {
    // categories: {
    //     [value: string]: BusinessCategory;
    // }
    categories: BusinessCategory[];
    // mainCarouselItems: BusinessItem[];
}

export type BusinessCategory = {
    id: string;
    title: string;
    items: BusinessItem[];
    subCategories?: BusinessCategory[];
}

export type BusinessItem = {
    id: string;
    title: string;
    imageUrl: string;
    description: string;
}