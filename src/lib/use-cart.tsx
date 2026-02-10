"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { CartItem, Product } from "@/lib/types";

interface CartContextType {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (cartId: string) => void;
    updateQuantity: (cartId: string, quantity: number) => void;
    toggleCart: () => void;
    isCartOpen: boolean;
    total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Hydrate cart from local storage
    useEffect(() => {
        setIsMounted(true);
        const saved = localStorage.getItem("cart");
        if (saved) {
            try {
                setItems(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Persist cart
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("cart", JSON.stringify(items));
        }
    }, [items, isMounted]);

    const addItem = (item: CartItem) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.cartId === item.cartId);
            if (existing) {
                return prev.map((i) =>
                    i.cartId === item.cartId
                        ? { ...i, quantity: i.quantity + item.quantity, subtotal: i.subtotal + item.subtotal }
                        : i
                );
            }
            return [...prev, item];
        });
        setIsCartOpen(true);
    };

    const removeItem = (cartId: string) => {
        setItems((prev) => prev.filter((i) => i.cartId !== cartId));
    };

    const updateQuantity = (cartId: string, quantity: number) => {
        if (quantity < 1) {
            removeItem(cartId);
            return;
        }
        setItems((prev) =>
            prev.map((i) => {
                if (i.cartId === cartId) {
                    // Re-calculate subtotal
                    const unitPrice = i.subtotal / i.quantity; // Approx reverse engineering or store unit price in item
                    // Better: we should store unitPrice in CartItem. For now, assuming linear.
                    const newSubtotal = (i.subtotal / i.quantity) * quantity;
                    return { ...i, quantity, subtotal: newSubtotal };
                }
                return i;
            })
        );
    };

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const total = items.reduce((acc, item) => acc + item.subtotal, 0);

    return (
        <CartContext.Provider
            value={{ items, addItem, removeItem, updateQuantity, toggleCart, isCartOpen, total }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
