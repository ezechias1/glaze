"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/data";
import { Category } from "@/lib/types";

const CATEGORIES: Category[] = ["Staples", "Single Origin", "Merchandise"];

export default function ShopPage() {
    const [activeCategory, setActiveCategory] = useState<Category | "All">("All");

    const filteredProducts = activeCategory === "All"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <div className="bg-accent/30 py-16 md:py-24 mb-12">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                        Shop Our Coffee
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        From our signature house blends to rare single origins, every bean is roasted with care in Simon&apos;s Town.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    <Button
                        variant={activeCategory === "All" ? "default" : "outline"}
                        onClick={() => setActiveCategory("All")}
                        className="rounded-full min-w-[80px]"
                    >
                        All
                    </Button>
                    {CATEGORIES.map((cat) => (
                        <Button
                            key={cat}
                            variant={activeCategory === cat ? "default" : "outline"}
                            onClick={() => setActiveCategory(cat)}
                            className="rounded-full min-w-[80px]"
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ProductCard {...product} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground">
                        No products found in this category.
                    </div>
                )}
            </div>
        </div>
    );
}
