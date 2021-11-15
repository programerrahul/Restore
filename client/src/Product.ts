export interface Product{
    id: number;
    name: string;
    description: string;
    pictureUrl: string;
    type?: string;
    price: number;
    brand: string;
    quantityInStock?: number;

}