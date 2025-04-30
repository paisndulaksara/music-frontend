 
import AlbumsSlider from "@/components/home/AlbumsSection";
import HeroSection from "@/components/home/HeroSection";
import SliderSection from "@/components/home/SliderSection";
import TourSection from "@/components/home/TourSection";
import VideosSection from "@/components/home/VideosSection";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <SliderSection/>
      <TourSection/> 
      <AlbumsSlider/>
      <VideosSection/>
    </>
  );
}
