export interface Product {
    product_id : number,
    name : string,
    description: string,
    price : number,
    cost : number,
    size : string,
    weight : number,
    stock : number,
    bar_code : string,
    created_at : string,
    category_id : number,
    discount_id : number
}

export interface Discount {
    percentage: number,
    start_date: string,
    end_date: string
}

export interface Category {
    category_id : number,
    name : string,
    created_at : string
}