export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    stock: number;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: Date;
}

export interface CartItem extends Book {
    quantity: number;
    userID: number;
}