"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Coffee, TrendingUp, Users } from "lucide-react";

export default function WholesalePage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send data to an API
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <div className="relative bg-primary text-primary-foreground py-24 md:py-32 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Partner with Blue Door
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
                            We supply exceptional coffee to cafes, restaurants, and offices across South Africa.
                            Let's grow your coffee business together.
                        </p>
                    </motion.div>
                </div>
                {/* Background Graphic */}
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 hidden md:block" />
            </div>

            <div className="container mx-auto px-4 md:px-6 mt-[-4rem] relative z-20">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16">

                    {/* Benefits */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-border/50 h-fit">
                        <h2 className="text-2xl font-bold text-primary mb-6">Why Partner With Us?</h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Coffee className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Consistent Quality</h3>
                                    <p className="text-muted-foreground">Small batch roasting ensures every bag meets our exacting standards.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Training & Support</h3>
                                    <p className="text-muted-foreground">Barista training and equipment advice to help your team succeed.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <TrendingUp className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Business Growth</h3>
                                    <p className="text-muted-foreground">Competitive wholesale pricing designed to maximize your margins.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lead Form */}
                    <div className="bg-accent/30 p-8 rounded-xl border border-border/50">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20"
                            >
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">✓</span>
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
                                <p className="text-muted-foreground">
                                    Thanks for your interest. Dewald will be in touch with you shortly.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-primary mb-2">Get Wholesale Pricing</h2>
                                    <p className="text-sm text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Contact Name</label>
                                        <input
                                            required
                                            className="w-full px-4 py-2 rounded-md border text-sm bg-white"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Business Name</label>
                                        <input
                                            required
                                            className="w-full px-4 py-2 rounded-md border text-sm bg-white"
                                            placeholder="Jane's Cafe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full px-4 py-2 rounded-md border text-sm bg-white"
                                        placeholder="jane@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Estimated Monthly Volume (kg)</label>
                                    <select className="w-full px-4 py-2 rounded-md border text-sm bg-white">
                                        <option>Less than 10kg</option>
                                        <option>10kg - 30kg</option>
                                        <option>30kg - 60kg</option>
                                        <option>60kg+</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Social Media Handle (Optional)</label>
                                    <input
                                        className="w-full px-4 py-2 rounded-md border text-sm bg-white"
                                        placeholder="@blue_door_coffee"
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full">
                                    Request Information
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
