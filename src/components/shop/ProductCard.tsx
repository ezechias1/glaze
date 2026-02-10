"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
    return (
        <Link href={`/shop/${id}`}>
            <motion.div
                className="group relative cursor-pointer"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
            >
                <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100 mb-4">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    />
                    {/* Quick Add overlay or badge could go here */}
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-semibold rounded text-primary">
                        {category}
                    </div>
                </div>
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                            {name}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1">
                            R {price}
                        </p>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        View
                    </Button>
                </div>
            </motion.div>
        </Link>
    );
}
