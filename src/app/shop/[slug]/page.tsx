"use client";

import { useEffect, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/data";
import { GrindOption, SizeOption, Product } from "@/lib/types";
import { useCart } from "@/lib/use-cart";
import { cn } from "@/lib/utils";

const GRIND_OPTIONS: GrindOption[] = ["Whole Bean", "Espresso", "Filter", "Plunger", "Aeropress", "Moka Pot"];
const SIZE_OPTIONS: SizeOption[] = ["250g", "1kg"];

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const { addItem } = useCart();
    const [product, setProduct] = useState<Product | null>(null);

    // Selection State
    const [grind, setGrind] = useState<GrindOption>("Whole Bean");
    const [size, setSize] = useState<SizeOption>("250g");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // In a real app, this would be an API call or database query
        const found = PRODUCTS.find(p => p.id === slug);
        if (found) setProduct(found);
    }, [slug]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 animate-pulse">
                    <div className="w-12 h-12 bg-gray-200 rounded-full" />
                    <p className="text-muted-foreground">Loading specific beans...</p>
                </div>
            </div>
        );
    }

    // Price Calculation Logic
    const currentPrice = size === "1kg" ? product.price * 3.5 : product.price; // Discount for 1kg
    const totalPrice = currentPrice * quantity;

    return (
        <div className="min-h-screen bg-background py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <Link href="/shop" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Shop
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Image Gallery */}
                    <div className="relative aspect-square bg-accent/20 rounded-xl overflow-hidden">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col h-full">
                        <div className="mb-6">
                            <span className="text-sm font-medium text-primary mb-2 block">{product.category}</span>
                            <h1 className="text-4xl font-bold tracking-tight mb-2">{product.name}</h1>
                            <p className="text-2xl font-medium text-foreground">R {currentPrice}</p>
                        </div>

                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        {product.tastingNotes && (
                            <div className="flex flex-wrap gap-2 mb-8">
                                {product.tastingNotes.map(note => (
                                    <span key={note} className="px-3 py-1 bg-accent rounded-full text-sm font-medium text-accent-foreground">
                                        {note}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="space-y-6 flex-grow">
                            {/* Size Selector */}
                            <div>
                                <label className="text-sm font-medium mb-2 block">Size</label>
                                <div className="flex gap-4">
                                    {SIZE_OPTIONS.map(opt => (
                                        <button
                                            key={opt}
                                            onClick={() => setSize(opt)}
                                            className={cn(
                                                "flex-1 py-3 px-4 rounded-lg border text-sm font-medium transition-all",
                                                size === opt
                                                    ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
                                                    : "border-input hover:border-primary/50"
                                            )}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Grind Selector */}
                            {product.category !== "Merchandise" && (
                                <div>
                                    <label className="text-sm font-medium mb-2 block">Grind</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                        {GRIND_OPTIONS.map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => setGrind(opt)}
                                                className={cn(
                                                    "py-2 px-3 rounded-md text-xs font-medium border transition-all text-center",
                                                    grind === opt
                                                        ? "border-primary bg-primary/5 text-primary"
                                                        : "border-input hover:border-primary/50"
                                                )}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="mt-8 pt-8 border-t">
                            <div className="flex items-center justify-between gap-4 mb-4">
                                {/* Quantity */}
                                <div className="flex items-center border rounded-md">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="p-3 hover:bg-accent text-muted-foreground transition-colors"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="w-12 text-center font-medium">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="p-3 hover:bg-accent text-muted-foreground transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Total */}
                                <div className="text-right flex-grow">
                                    <p className="text-sm text-muted-foreground">Total</p>
                                    <p className="text-xl font-bold">R {totalPrice}</p>
                                </div>
                            </div>

                            <Button
                                size="lg"
                                className="w-full h-12 text-base gap-2"
                                onClick={() => {
                                    addItem({
                                        ...product,
                                        cartId: `${product.id}-${size}-${grind}`.toLowerCase().replace(/\s+/g, '-'),
                                        selectedSize: size,
                                        selectedGrind: product.category !== "Merchandise" ? grind : undefined,
                                        quantity,
                                        subtotal: totalPrice,
                                    });
                                }}
                            >
                                <ShoppingBag className="w-5 h-5" />
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
