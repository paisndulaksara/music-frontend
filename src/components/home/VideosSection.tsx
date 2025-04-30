"use client";

import React, { useState } from "react";
import Image from "next/image";
const videos = [
  {
    id: 1,
    title: "Jimmy Kimmel Live",
    date: "September 2018",
    category: "Concert",
    thumbnail: "/images/v1.jpg",
    youtubeId: "r8nJtDHFbls",
  },
  {
    id: 2,
    title: "American Music Awards",
    date: "June 2018",
    category: "Music Video",
    thumbnail: "/images/v2.jpg",
    youtubeId: "1ZYbU82GVz4",
  },
  {
    id: 3,
    title: "Onstage Live",
    date: "March 2018",
    category: "Concert",
    thumbnail: "/images/v3.jpg",
    youtubeId: "ktvTqknDobU",
  },
  {
    id: 4,
    title: "Indie Session",
    date: "May 2017",
    category: "Music Video",
    thumbnail: "/images/v4.jpg",
    youtubeId: "RgKAFK5djSk",
  },
  {
    id: 5,
    title: "City Lights",
    date: "August 2017",
    category: "Music Video",
    thumbnail: "/images/v5.jpg",
    youtubeId: "60ItHLz5WEA",
  },
  {
    id: 6,
    title: "Neon Beats",
    date: "November 2016",
    category: "Concert",
    thumbnail: "/images/v6.jpg",
    youtubeId: "3JZ_D3ELwOQ",
  },
  {
    id: 7,
    title: "Concert 3",
    category: "Concert",
    thumbnail: "/images/v7.jpg",
    youtubeId: "tgbNymZ7vqY",
  },
  {
    id: 8,
    title: "Concert 4",
    category: "Concert",
    thumbnail: "/images/v8.jpg",
    youtubeId: "3AtDnEC4zak",
  },
  {
    id: 9,
    title: "Song 5",
    category: "Music Video",
    thumbnail: "/images/v9.jpg",
    youtubeId: "OPf0YbXqDm0",
  },
];

const categories = ["All", "Music Video", "Concert"];

export default function VideosSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [clicked, setClicked] = useState<number | null>(null);

  const filteredVideos =
    selectedCategory === "All"
      ? videos
      : videos.filter((vid) => vid.category === selectedCategory);

  return (
    <section className="bg-black text-white px-8 py-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">VIDEOS</h2>
        <div className="flex justify-center gap-6 text-sm uppercase tracking-wider">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setPlayingId(null);
              }}
              className={`relative font-bold transition-all ${
                selectedCategory === cat
                  ? "text-[#f42e55]"
                  : "text-white hover:text-[#f42e55]"
              }`}
            >
              {cat}
              {selectedCategory === cat && (
                <span className="block h-[2px] w-full bg-[#f42e55] mt-1" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.map((video) => (
          <div key={video.id} className="relative">
            {playingId === video.id ? (
              <iframe
                className="w-full h-64 sm:h-60 md:h-72"
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                title={video.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <div className="group relative cursor-pointer">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={640} // set fixed width
                  height={360} // set fixed height
                  className="w-full h-64 object-cover transition duration-300"
                  priority
                />
                <div
                  onClick={() => {
                    setClicked(video.id);
                    setTimeout(() => {
                      setPlayingId(video.id);
                    }, 400);
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div
                    className={`w-14 h-14 rounded-full border-[3px] border-white ${
                      clicked === video.id ? "animate-ping-once" : ""
                    }`}
                  />
                  <div className="absolute z-10">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[10px] border-l-black border-y-[6px] border-y-transparent ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="mt-2">
              <p className="text-sm font-bold">{video.title}</p>
              <p className="text-xs text-gray-400">{video.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
