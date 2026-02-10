"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/use-cart";

const NAV_LINKS = [
    { href: "/shop", label: "Shop Coffee" },
    { href: "/menu", label: "Cafe Menu" },
    { href: "/brew-guides", label: "Brew Guides" },
    { href: "/wholesale", label: "Wholesale" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { toggleCart, items } = useCart();

    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
                )}
            >
                {/* Utility Bar - Only visible when not scrolled */}
                <div
                    className={cn(
                        "absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-xs font-medium py-2 text-center transition-transform duration-300",
                        isScrolled ? "-translate-y-full" : "translate-y-0"
                    )}
                >
                    FREE SHIPPING ON ORDERS OVER R799
                </div>

                <div className={cn(
                    "container mx-auto px-4 md:px-6 flex items-center justify-between transition-all duration-300",
                    isScrolled ? "mt-0" : "mt-8"
                )}>
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold tracking-tight text-primary">
                        BLUE DOOR
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === link.href ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-accent rounded-full text-muted-foreground hover:text-primary transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                        <button
                            onClick={toggleCart}
                            className="p-2 hover:bg-accent rounded-full text-muted-foreground hover:text-primary transition-colors relative"
                        >
                            <ShoppingBag className="w-5 h-5" />
                            {/* Cart Badge */}
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full animate-in zoom-in">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-primary"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
                    >
                        <nav className="flex flex-col gap-6 text-center">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
