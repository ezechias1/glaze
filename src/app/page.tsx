import Hero from "@/components/home/Hero";
import FeaturedGrid from "@/components/home/FeaturedGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedGrid />
    </div>
  );
}
