"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background - In a real app, uses Next/Image or video */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                {/* Placeholder for roasting process video/image */}
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop')"
                    }}
                />
            </div>

            {/* Content */}
            <div className="container relative z-20 px-4 md:px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
                        Explore our hand roasted 100% speciality coffee
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Crafted with passion in the heart of Simon&apos;s Town. Experience the perfect brew.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/shop">
                            <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto text-base px-8 py-6">
                                Shop Our Coffee
                            </Button>
                        </Link>
                        <Link href="/menu">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 w-full sm:w-auto text-base px-8 py-6">
                                View Menu
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
