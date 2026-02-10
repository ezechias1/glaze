"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, Thermometer, Scale, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface BrewStep {
    time: string;
    action: string;
}

interface BrewGuideProps {
    method: string;
    description: string;
    difficulty: "Easy" | "Medium" | "Hard";
    time: string;
    temp: string;
    ratio: string;
    grind: string;
    steps: BrewStep[];
    image: string;
}

export default function BrewCard({ method, description, difficulty, time, temp, ratio, grind, steps, image }: BrewGuideProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-border/50 hover:shadow-md transition-shadow"
        >
            <div
                className="cursor-pointer relative"
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Header Section */}
                <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-48 h-48 flex-shrink-0 bg-gray-100">
                        <Image
                            src={image}
                            alt={`${method} brewing method`}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-primary/5" />
                    </div>

                    <div className="p-6 flex-grow flex flex-col justify-center">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-2xl font-bold text-primary">{method}</h3>
                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown className="w-6 h-6 text-muted-foreground" />
                            </motion.div>
                        </div>
                        <p className="text-muted-foreground mb-4">{description}</p>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                            <div className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4 text-primary" />
                                {time}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Thermometer className="w-4 h-4 text-primary" />
                                {temp}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Scale className="w-4 h-4 text-primary" />
                                {ratio}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className={cn(
                                    "px-2 py-0.5 rounded text-xs",
                                    difficulty === "Easy" ? "bg-green-100 text-green-700" :
                                        difficulty === "Medium" ? "bg-yellow-100 text-yellow-700" :
                                            "bg-red-100 text-red-700"
                                )}>
                                    {difficulty}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expanded Details */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-accent/10 border-t"
                    >
                        <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                    <Droplets className="w-5 h-5 text-primary" />
                                    The Brew
                                </h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-muted-foreground">Coffee Amount</span>
                                        <span className="font-medium">{(parseInt(ratio.split(':')[1]) || 15)}g</span>
                                    </div>
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-muted-foreground">Water Amount</span>
                                        <span className="font-medium">250ml</span>
                                    </div>
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-muted-foreground">Grind Size</span>
                                        <span className="font-medium">{grind}</span>
                                    </div>
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-muted-foreground">Water Temp</span>
                                        <span className="font-medium">{temp}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-4">Steps</h4>
                                <div className="space-y-4 relative border-l-2 border-primary/20 pl-6 ml-2">
                                    {steps.map((step, index) => (
                                        <div key={index} className="relative">
                                            <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white" />
                                            <div className="flex flex-col">
                                                <span className="text-xs font-bold text-primary mb-1">{step.time}</span>
                                                <p className="text-sm text-foreground/90">{step.action}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
