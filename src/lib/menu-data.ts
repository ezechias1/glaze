export type MenuCategory = "Hot Drinks" | "Cold Drinks" | "Food" | "Bakery";

export interface MenuItem {
    id: string;
    name: string;
    price: number;
    description?: string;
    category: MenuCategory;
}

export const MENU_ITEMS: MenuItem[] = [
    // Hot Drinks
    { id: "espresso", name: "Espresso", price: 30, category: "Hot Drinks" },
    { id: "americano", name: "Americano", price: 32, category: "Hot Drinks" },
    { id: "cortado", name: "Cortado", price: 34, category: "Hot Drinks" },
    { id: "flat-white", name: "Flat White", price: 36, category: "Hot Drinks" },
    { id: "latte", name: "Latte", price: 38, category: "Hot Drinks" },
    { id: "cappuccino", name: "Cappuccino", price: 36, category: "Hot Drinks" },
    { id: "mocha", name: "Mocha", price: 42, category: "Hot Drinks" },
    { id: "hot-chocolate", name: "Hot Chocolate", price: 38, category: "Hot Drinks" },
    { id: "red-cappuccino", name: "Red Cappuccino", price: 38, category: "Hot Drinks" },
    // Cold Drinks
    { id: "iced-latte", name: "Iced Latte", price: 40, category: "Cold Drinks" },
    { id: "iced-americano", name: "Iced Americano", price: 35, category: "Cold Drinks" },
    { id: "cold-brew", name: "Cold Brew", price: 40, category: "Cold Drinks" },
    { id: "smoothie-green", name: "Green Smoothie", price: 65, description: "Spinach, Apple, Pineapple, Banana", category: "Cold Drinks" },
    { id: "smoothie-berry", name: "Berry Smoothie", price: 65, description: "Mixed Berries, Banana, Yoghurt", category: "Cold Drinks" },
    // Food
    { id: "avo-toast", name: "Avo Toast", price: 85, description: "Sourdough, Smashed Avo, Dan's Dressing, Lemon", category: "Food" },
    { id: "chicken-mayo", name: "Chicken Mayo Toastie", price: 75, description: "Roasted Chicken, House Mayo, Pickles", category: "Food" },
    { id: "cheese-tomato", name: "Cheese & Tomato Toastie", price: 60, description: "Mature Cheddar, Tomato, Basil Pesto", category: "Food" },
    { id: "bacon-egg-bun", name: "Bacon & Egg Bun", price: 70, description: "Brioche Bun, Crispy Bacon, Fried Egg, Relish", category: "Food" },
    // Bakery
    { id: "croissant", name: "Butter Croissant", price: 30, category: "Bakery" },
    { id: "almond-croissant", name: "Almond Croissant", price: 40, category: "Bakery" },
    { id: "carrot-cake", name: "Carrot Cake", price: 55, category: "Bakery" },
    { id: "brownie", name: "Dark Choc Brownie", price: 40, category: "Bakery" },
];

export const ADD_ONS = [
    { name: "Extra Espresso Shot", price: 12 },
    { name: "Almond Milk", price: 10 },
    { name: "Oat Milk", price: 10 },
    { name: "Soy Milk", price: 8 },
    { name: "Cream", price: 8 },
];
