"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/use-cart";

export default function CartDrawer() {
    const { isCartOpen, toggleCart, items, removeItem, updateQuantity, total } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-full max-w-md bg-background z-50 shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 border-b flex items-center justify-between">
                            <h2 className="text-lg font-semibold">Shopping Cart ({items.length})</h2>
                            <button
                                onClick={toggleCart}
                                className="p-2 hover:bg-accent rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
                                    <p>Your cart is empty.</p>
                                    <Button variant="outline" onClick={toggleCart}>Continue Shopping</Button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.cartId} className="flex gap-4 p-3 bg-accent/20 rounded-lg">
                                        <div className="relative w-20 h-20 bg-white rounded-md overflow-hidden flex-shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-medium text-sm leading-tight">{item.name}</h3>
                                                <p className="text-xs text-muted-foreground mt-1">
                                                    {item.selectedSize}
                                                    {item.selectedGrind && ` • ${item.selectedGrind}`}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-1 border rounded bg-background">
                                                    <button
                                                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                                                        className="p-1 hover:bg-accent text-muted-foreground"
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="text-xs w-6 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                                                        className="p-1 hover:bg-accent text-muted-foreground"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="font-medium text-sm">R {item.subtotal}</span>
                                                    <button
                                                        onClick={() => removeItem(item.cartId)}
                                                        className="text-red-500 hover:text-red-700"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-4 border-t bg-accent/10">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span className="text-xl font-bold">R {total}</span>
                                </div>
                                <p className="text-xs text-center text-muted-foreground mb-4">
                                    {total >= 799 ? "Free Shipping Applied!" : `Add R${799 - total} for Free Shipping`}
                                </p>
                                <Button className="w-full h-12 text-base">Checkout</Button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
