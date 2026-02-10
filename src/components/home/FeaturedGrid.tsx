"use client";

import ProductCard from "@/components/shop/ProductCard";

import { PRODUCTS } from "@/lib/data";

const STAPLES = PRODUCTS.filter(p => ["house-blend", "midnight-special"].includes(p.id));
const ARRIVALS = PRODUCTS.filter(p => ["kenya-karia-ini", "uganda-nyabirongo"].includes(p.id));

export default function FeaturedGrid() {
    return (
        <section className="py-20 bg-accent/30">
            <div className="container mx-auto px-4 md:px-6">
                {/* The Staples */}
                <div className="mb-16">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-primary">The Staples</h2>
                            <p className="text-muted-foreground mt-2">Our signature blends loved by locals.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {STAPLES.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>

                {/* New Arrivals */}
                <div>
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-primary">New Arrivals</h2>
                            <p className="text-muted-foreground mt-2">Fresh single origins from around the world.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {ARRIVALS.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
