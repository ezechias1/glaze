"use client";

import { motion } from "framer-motion";
import BrewCard from "@/components/brew/BrewCard";

const GUIDES = [
    {
        method: "V60 Pour Over",
        description: "Clean, floral, and tea-like. Perfect for highlighting complex single origins.",
        difficulty: "Medium" as const,
        time: "3:00",
        temp: "93°C",
        ratio: "1:16",
        grind: "Medium-Fine (Sea Salt)",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2000&auto=format&fit=crop",
        steps: [
            { time: "0:00", action: "Rinse filter with hot water and discard water." },
            { time: "0:00 - 0:45", action: "Bloom: Pour 40g water over coffee. Swirl gently." },
            { time: "0:45 - 1:30", action: "Pour remaining water in steady concentric circles." },
            { time: "1:30 - 3:00", action: "Let draw down completely. Stir once if needed." }
        ]
    },
    {
        method: "Espresso",
        description: "Intense, syrupy, and concentrated. The base for milk drinks or enjoyed pure.",
        difficulty: "Hard" as const,
        time: "25-30s",
        temp: "93°C",
        ratio: "1:2",
        grind: "Fine (Powder)",
        image: "https://images.unsplash.com/photo-1601639906806-38290f845760?q=80&w=2000&auto=format&fit=crop",
        steps: [
            { time: "0:00", action: "Purge grouphead. Dry portafilter basket." },
            { time: "0:05", action: "Dose 18g coffee. Distribute and tamp evenly." },
            { time: "0:10", action: "Lock in portafilter and start pump immediately." },
            { time: "0:30", action: "Stop shot at 36g yield. Enjoy crema." }
        ]
    },
    {
        method: "AeroPress",
        description: "Versatile and full-bodied. Great for travel and forgiving on technique.",
        difficulty: "Easy" as const,
        time: "2:00",
        temp: "85°C",
        ratio: "1:15",
        grind: "Medium (Table Salt)",
        image: "https://images.unsplash.com/photo-1563205764-5d55288219ab?q=80&w=2000&auto=format&fit=crop",
        steps: [
            { time: "0:00", action: "Add 15g coffee (standard method)." },
            { time: "0:00 - 0:10", action: "Add 225g water. Stir 5 times." },
            { time: "0:10 - 1:30", action: "Insert plunger significantly to create seal. Wait." },
            { time: "1:30 - 2:00", action: "Press gently but consistently until hiss." }
        ]
    },
    {
        method: "French Press",
        description: "Rich, heavy body. The classic full-immersion brew.",
        difficulty: "Easy" as const,
        time: "4:00",
        temp: "95°C",
        ratio: "1:15",
        grind: "Coarse (Breadcrumbs)",
        image: "https://images.unsplash.com/photo-1551225026-6d60c39f131a?q=80&w=2000&auto=format&fit=crop",
        steps: [
            { time: "0:00", action: "Add 30g coarse coffee." },
            { time: "0:00 - 0:30", action: "Add 500ml water. Ensure all grounds wet." },
            { time: "0:30 - 4:00", action: "Place lid on but don't plunge. Wait." },
            { time: "4:00", action: "Break crust, scoop foam, then plunge gently." }
        ]
    },
    {
        method: "Moka Pot",
        description: "Strong 'stovetop espresso'. Classic Italian home brewing.",
        difficulty: "Medium" as const,
        time: "5:00",
        temp: "Boiling",
        ratio: "1:10",
        grind: "Medium-Fine",
        image: "https://images.unsplash.com/photo-1533230485906-8968037b587b?q=80&w=2000&auto=format&fit=crop",
        steps: [
            { time: "0:00", action: "Fill base with hot water to valve." },
            { time: "0:30", action: "Fill basket loosely with coffee. Do not tamp." },
            { time: "1:00", action: "Screw on top. Place on medium heat." },
            { time: "4:00", action: "Remove from heat when gurgling starts." }
        ]
    }
];

export default function BrewGuidesPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="bg-primary/5 py-16 md:py-24 mb-12 border-b">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                            Brew Guides
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Master the art of home brewing with our step-by-step guides for every method.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="space-y-6">
                    {GUIDES.map((guide, index) => (
                        <motion.div
                            key={guide.method}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <BrewCard {...guide} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
