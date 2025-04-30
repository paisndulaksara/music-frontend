"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

function NextArrow(props: { onClick?: () => void }) {
  return (
    <div
      onClick={props.onClick}
      className="absolute bottom-4 right-8 z-10 cursor-pointer bg-white/20 text-white px-3 py-1 rounded-md"
    >
      ►
    </div>
  );
}

function PrevArrow(props: { onClick?: () => void }) {
  return (
    <div
      onClick={props.onClick}
      className="absolute bottom-4 right-20 z-10 cursor-pointer bg-white/20 text-white px-3 py-1 rounded-md"
    >
      ◄
    </div>
  );
}

const slidesData = [
  {
    subheading: "Latest Videos",
    title: "For Fans",
    paragraph: `Seethrough delicate embroidered organza blue lining luxury acetate-mix
stretch pleat detailing. Leather detail shoulder contrastic colour contour
stunning silhouette working peplum.`,
    buttonText: "View Videos",
    image: "/images/slider3.jpg",
  },
  {
    subheading: "World Tour",
    title: "New Single",
    paragraph: `Seethrough delicate embroidered organza blue lining luxury acetate-mix
stretch pleat detailing. Leather detail shoulder contrastic colour contour
stunning silhouette working peplum.`,
    buttonText: "Listen Now",
    image: "/images/slider1.jpg",
  },
  {
    subheading: "Another Topic",
    title: "Something Big",
    paragraph: `Seethrough delicate embroidered organza blue lining luxury acetate-mix
stretch pleat detailing. Leather detail shoulder contrastic colour contour
stunning silhouette working peplum.`,
    buttonText: "Check It Out",
    image: "/images/slider2.jpg",
  },
];

export default function SliderSection() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (current: number) => setActiveSlide(current),
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {slidesData.map((slide, index) => {
          const isActive = index === activeSlide;

          return (
            <div key={index}>
              <div className="bg-black text-white flex flex-row items-center w-full">
                {/* Text Section */}
                <div className="w-1/2 px-4">
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key={`text-${index}`}
                        initial={{ rotateX: 90, opacity: 0 }}
                        animate={{ rotateX: 0, opacity: 1 }}
                        exit={{ rotateX: -90, opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="origin-top"
                      >
                        <h4 className="text-xs uppercase text-gray-400 tracking-wide mb-2">
                          {slide.subheading}
                        </h4>
                        <h2 className="text-5xl font-bold mb-4">
                          {slide.title}
                        </h2>
                        <p className="text-base leading-relaxed mb-6 whitespace-pre-line">
                          {slide.paragraph}
                        </p>
                        <button className="text-[#f42e55] font-semibold mt-2">
                          {slide.buttonText}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Image Section */}
                <div className="relative w-1/2 h-[500px] overflow-hidden">
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key={`image-${index}`}
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 200, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover"
                          priority
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
