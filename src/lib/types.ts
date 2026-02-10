export type Category = "Staples" | "Single Origin" | "Merchandise" | "Equipment";

export type GrindOption = "Whole Bean" | "Espresso" | "Filter" | "Plunger" | "Aeropress" | "Moka Pot";

export type SizeOption = "250g" | "1kg";

export interface Variant {
    id: string;
    size: SizeOption;
    price: number;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number; // Base price (usually 250g)
    image: string;
    category: Category;
    roastLevel?: "Light" | "Medium" | "Dark";
    tastingNotes?: string[];
    variants?: Variant[]; // If applicable
}

export interface CartItem extends Product {
    cartId: string; // Unique ID for cart entry (combines product + options)
    selectedGrind?: GrindOption;
    selectedSize: SizeOption;
    quantity: number;
    subtotal: number;
}
