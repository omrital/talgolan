export type BusinessData = {
    categories: BusinessCategory[];
    mainCarouselItems: BusinessItem[];
}

export type BusinessCategory = {
    id: CategoryType;
    title: string;
    items?: BusinessItem[];
    subCategories?: BusinessCategory[];
}

export type BusinessItem = {
    id: string;
    title?: string;
    imageUrl: string;
    description?: string;
}

export enum CategoryType {
    CERAMIC = "CERAMIC",
    TOILET = "TOILET",
    BATH = "BATH",
    WASH = "WASH",
    TAP = "TAP",
    CABINET = "CABINET",
    // Ceramic types
    CLASSIC = "CLASSIC",
    MODERN = "MODERN",
    INDUSTRIAL = "INDUSTRIAL",
    RURAL = "RURAL",
    STONE = "STONE",
    PARQUET = "PARQUET"
}
