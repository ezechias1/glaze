import { Product } from "./types";

export const PRODUCTS: Product[] = [
    // Staples
    {
        id: "house-blend",
        name: "House Blend",
        description: "Our signature daily drinker. Chocolatey, nutty, and consistent.",
        price: 120,
        image: "/products/house-blend.png",
        category: "Staples",
        roastLevel: "Medium",
        tastingNotes: ["Chocolate", "Hazelnut", "Caramel"],
    },
    {
        id: "midnight-special",
        name: "Midnight Special",
        description: "For those who like it strong. Dark, bold, and intense.",
        price: 120,
        image: "/products/midnight-special.png",
        category: "Staples",
        roastLevel: "Dark",
        tastingNotes: ["Dark Chocolate", "Spice", "Smoke"],
    },
    // Single Origins
    {
        id: "kenya-karia-ini",
        name: "Kenya Karia-Ini",
        description: "Bright, juicy, and complex. A classic Kenyan profile.",
        price: 220,
        image: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?q=80&w=1974&auto=format&fit=crop",
        category: "Single Origin",
        roastLevel: "Light",
        tastingNotes: ["Blackcurrant", "Tomato", "Citrus"],
    },
    {
        id: "uganda-nyabirongo",
        name: "Uganda Nyabirongo",
        description: "Sweet and syrupy with a heavy body.",
        price: 230,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop",
        category: "Single Origin",
        roastLevel: "Medium",
        tastingNotes: ["Dried Fruit", "Maple Syrup", "Plum"],
    },
    {
        id: "ethiopia-guji",
        name: "Ethiopia Guji",
        description: "Floral and tea-like. Delicate and refined.",
        price: 240,
        image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=1935&auto=format&fit=crop",
        category: "Single Origin",
        roastLevel: "Light",
        tastingNotes: ["Jasmine", "Peach", "Bergamot"],
    },
    // Merchandise
    {
        id: "blue-door-cap",
        name: "Blue Door Cap",
        description: "Classic unstructured 6-panel cap with embroidered logo.",
        price: 350,
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=2080&auto=format&fit=crop",
        category: "Merchandise",
    },
];
