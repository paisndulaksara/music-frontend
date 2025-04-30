// components/home/TourSection.tsx
"use client";

import { motion } from "framer-motion";

const tours = [
  {
    date: "20",
    month: "November",
    year: "2018",
    venue: "Videotron Center",
    location: "Manhattan, NY, United States",
    buttonText: "Buy Tickets",
    buttonStyle: "bg-f42e55 text-white",
  },
  {
    date: "06",
    month: "December",
    year: "2018",
    venue: "Spotify On Stage",
    location: "Suncorp Stadium, Brisbane, Australia",
    buttonText: "Sold Out",
    buttonStyle: "text-f42e55",
  },
  {
    date: "15",
    month: "February",
    year: "2019",
    venue: "Halloween Bitchy Land",
    location: "Mediolanum Forum, Milan, Italy",
    buttonText: "Free",
    buttonStyle: "text-f42e55",
  },
  {
    date: "28",
    month: "April",
    year: "2019",
    venue: "Cornelius - Singha Light",
    location: "Odyssey (SSE Belfast), Belfast, United Kingdom",
    buttonText: "Buy Tickets",
    buttonStyle: "bg-f42e55 text-white",
  },
  {
    date: "02",
    month: "June",
    year: "2019",
    venue: "Karma Kruise",
    location: "AMI Stadium Christchurch, Christchurch, New Zealand",
    buttonText: "Buy Tickets",
    buttonStyle: "bg-f42e55 text-white",
  },
];

export default function TourSection() {
  return (
    <section className="bg-white text-black-custom py-20">
      {/* Heading Area */}
      <motion.div
        className="text-center max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-lg font-semibold mb-2">
          Music is the great uniter. An incredible force. Something that people who differ on everything and anything else can have in common.
        </p>

        {/* Divider */}
        <div className="flex justify-center items-center my-6">
          <div className="h-10 w-px bg-black" />
        </div>

        {/* "Upcoming" + Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-600 uppercase tracking-widest">Upcoming</p>
          <h2 className="text-4xl font-bold tracking-wide mt-2">Tour</h2>
        </motion.div>
      </motion.div>

      {/* Tour List */}
      <div className="max-w-5xl mx-auto mt-16 px-4 space-y-12">
        {tours.map((tour, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between"
          >
            {/* Date */}
            <div className="text-center lg:text-left mb-4 lg:mb-0 lg:w-[120px]">
              <h3 className="text-3xl font-bold">{tour.date}</h3>
              <p className="text-sm font-medium">{tour.month}</p>
              <p className="text-xs text-gray-500">{tour.year}</p>
            </div>

            {/* Venue Info */}
            <div className="flex-1 lg:pl-6 mb-4 lg:mb-0">
              <h4 className="text-lg font-semibold">{tour.venue}</h4>
              <p className="text-sm text-gray-600">{tour.location}</p>
            </div>

            {/* Button */}
            <div>
              <button className={`px-4 py-2 text-sm rounded ${tour.buttonStyle}`}>
                {tour.buttonText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
