// app/components/home/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black">
      {/* Background Image for the hero section */}
      <div className="  inset-0 -z-10">
        <Image
          src="/images/hero.jpg"  // This is the hero background image
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto flex flex-col items-center justify-center py-20 relative z-10 text-center">
        <h1 className="renner-600-white-160 image-text">
        Theekshana Anuradha
        </h1>
        <p className="mt-4 text-lg text-white-custom">
          Discover the latest single and upcoming tours
        </p>
      </div>
    </section>
  );
}
