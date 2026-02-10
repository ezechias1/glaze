"use client";

import { motion } from "framer-motion";
import { MENU_ITEMS, ADD_ONS, MenuCategory, MenuItem } from "@/lib/menu-data";

const CATEGORIES: MenuCategory[] = ["Hot Drinks", "Cold Drinks", "Food", "Bakery"];

export default function MenuPage() {
    const getItemsByCategory = (category: MenuCategory) =>
        MENU_ITEMS.filter(item => item.category === category);

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <div className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-medium tracking-wider uppercase mb-2 block text-primary-foreground/80">Digital Menu</span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                            CAFE MENU
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                            Freshly roasted coffee and wholesome food serving daily at Harbour Bay Mall.
                        </p>
                    </motion.div>
                </div>
                {/* Abstract background shape */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 mt-16 max-w-4xl">
                {CATEGORIES.map((category, index) => {
                    const items = getItemsByCategory(category);
                    if (items.length === 0) return null;

                    return (
                        <motion.section
                            key={category}
                            className="mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h2 className="text-3xl font-bold text-primary mb-8 border-b pb-2 inline-block">
                                {category}
                            </h2>

                            <div className="grid gap-6">
                                {items.map((item) => (
                                    <div key={item.id} className="flex justify-between items-baseline group">
                                        <div className="flex-1 pr-8">
                                            <div className="flex items-baseline justify-between mb-1">
                                                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                                                    {item.name}
                                                </h3>
                                                <span className="font-bold text-primary">R {item.price}</span>
                                            </div>
                                            {item.description && (
                                                <p className="text-muted-foreground text-sm">{item.description}</p>
                                            )}

                                            {/* Dotted line loader effect for visual connection */}
                                            <div className="hidden border-b border-dotted border-gray-300 flex-grow mx-4 relative top-[-6px]" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    );
                })}

                {/* Add Ons Section */}
                <motion.section
                    className="bg-accent/30 rounded-xl p-8 mt-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-primary">Enhance Your Brew</h3>
                        <p className="text-muted-foreground">Customize your drink just the way you like it.</p>
                    </div>

                    <div className="flex flex-wrapjustify-center gap-x-8 gap-y-4 justify-center">
                        {ADD_ONS.map((addon) => (
                            <div key={addon.name} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                                <span className="font-medium text-sm">{addon.name}</span>
                                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded ml-1">
                                    +R {addon.price}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
