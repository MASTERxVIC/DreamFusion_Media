import { useState } from "react";
import { testimonials } from "../data/testimonials";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setIndex((index + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-bespoke font-extrabold">
          Client <span className="text-green-500">Testimonials</span>
        </h2>
        <p className="text-gray-500 mt-2 font-clash font-normal">
          What my clients say about working with me
        </p>
      </div>

      {/* Card */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-10 text-center">
        <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100">
          <Quote className="text-green-500" />
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-6">
          {Array.from({ length: t.rating }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">★</span>
          ))}
        </div>

        <p className="text-gray-600 font-bespoke italic leading-relaxed">
          “{t.message}”
        </p>

        <h4 className="mt-6 font-clash font-semibold text-lg">{t.name}</h4>
        <p className="text-sm font-clash text-gray-500">{t.role}</p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
