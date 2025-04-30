"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { FaPlay, FaPause, FaExternalLinkAlt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow"; 

const albums = [
  {
    year: "2013",
    title: "Energetic Indie Rock",
    image: "/images/m1.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    link: "https://www.youtube.com/watch?v=1ZYbU82GVz4",
  },
  {
    year: "2012",
    title: "Epic Uplifting",
    image: "/images/m2.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    link: "https://www.youtube.com/watch?v=7NOSDKb0HlU",
  },
  {
    year: "2011",
    title: "Sport Rock",
    image: "/images/m6.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    link: "https://www.youtube.com/watch?v=ktvTqknDobU",
  },
  {
    year: "2010",
    title: "Quirky Upbeat Retro",
    image: "/images/m5.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    link: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
  },
];

export default function AlbumsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) audioRef.current.play();
  };

  const handlePause = () => {
    if (audioRef.current) audioRef.current.pause();
  };

  return (
    <div
      className="relative w-full bg-fixed bg-center bg-cover py-20"
      style={{ backgroundImage: `url('/images/album-bg.jpg')` }}
    >
      <div className="text-center text-white mb-12">
        <p className="text-sm uppercase tracking-wide">Upcoming</p>
        <h2 className="text-4xl font-bold">Albums</h2>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          if (audioRef.current) audioRef.current.pause();
        }}
        modules={[EffectCoverflow]}
        className="albumsSwiper"
      >
        {albums.map((album, index) => (
          <SwiperSlide
            key={index}
            className={`relative group w-[300px] h-[400px] overflow-hidden transition-all duration-300 ${
              index === activeIndex ? 'z-20' : 'z-10'
            }`}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 rounded-lg overflow-hidden ${
                index === activeIndex ? 'group-hover:-rotate-x-12' : ''
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src={album.image}
                alt={album.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="absolute bottom-4 left-4 text-white z-10">
              <p className="text-sm">{album.year}</p>
              <h3 className="text-lg font-bold">{album.title}</h3>
            </div>

            {index === activeIndex && (
              <>
                <div className="absolute bottom-[-100px] left-0 right-0 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500 bg-black/70 flex justify-center gap-6 py-4 text-white">
                  <button onClick={handlePlay}>
                    <FaPlay className="text-xl" />
                  </button>
                  <button onClick={handlePause}>
                    <FaPause className="text-xl" />
                  </button>
                  <a
                    href={album.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                </div>
                <audio ref={audioRef} src={album.audio} preload="auto" />
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
