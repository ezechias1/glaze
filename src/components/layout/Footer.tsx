import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Newsletter */}
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold tracking-tight">BLUE DOOR COFFEE ROASTERS</h2>
                        <p className="text-primary-foreground/80 max-w-md">
                            Hand roasted 100% speciality coffee in Simon&apos;s Town.
                            Join the family for updates and special offers.
                        </p>
                        <form className="flex gap-2 max-w-sm">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-white placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 bg-white text-primary font-semibold rounded-md hover:bg-accent hover:text-foreground transition-colors"
                                disabled
                            >
                                JOIN
                            </button>
                        </form>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Explore</h3>
                        <ul className="space-y-2 text-sm text-primary-foreground/80">
                            <li><Link href="/shop" className="hover:text-white transition-colors">Shop Coffee</Link></li>
                            <li><Link href="/menu" className="hover:text-white transition-colors">Cafe Menu</Link></li>
                            <li><Link href="/brew-guides" className="hover:text-white transition-colors">Brew Guides</Link></li>
                            <li><Link href="/wholesale" className="hover:text-white transition-colors">Wholesale</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Hours */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Visit Us</h3>
                        <div className="space-y-2 text-sm text-primary-foreground/80">
                            <p>Harbour Bay Mall, Simon&apos;s Town</p>
                            <p>Daily 6:30 AM - 5:00 PM</p>
                            <div className="pt-2">
                                <a href="tel:0212869946" className="block hover:text-white transition-colors">021 286 9946</a>
                                <a href="mailto:dewald@bluedoorcoffeeroasters.com" className="block hover:text-white transition-colors">dewald@bluedoor.com</a>
                            </div>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
                    <p>&copy; {new Date().getFullYear()} Blue Door Coffee Roasters. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
