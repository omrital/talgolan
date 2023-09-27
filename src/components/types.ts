export type Category = {
    id: string;
    title: string;
}

export type ImageDataItem = {
    title?: string;
    imageSrc: string;
    description?: string;
    onClick?: () => void;
}
