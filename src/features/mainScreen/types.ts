export type BusinessData = {
    categories: {
        [value: string]: BusinessCategory;
    }
}

export type BusinessCategory = {
    title: string;
    items: BusinessItem[];
}

export type BusinessItem = {
    title: string;
    imageUrl: string;
    description: string;
}