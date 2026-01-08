import { LayoutGrid, Palette, RefreshCcw, Video } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="w-full py-24 px-6 lg:px-20 bg-white">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bespoke font-extrabold text-gray-900">
          My <span className="text-green-500">Services</span>
        </h2>
        <p className="mt-3 font-clash font-normal text-gray-500 max-w-xl mx-auto">
          Comprehensive creative solutions tailored to your brand's needs
        </p>
      </div>

      {/* Services Grid */}
      <div className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card */}
        {[
          {
            title: "Poster Design",
            desc: "Eye-catching poster designs that capture attention and communicate your message effectively. From event promotions to advertising campaigns.",
            icon: <LayoutGrid size={26} />,
          },
          {
            title: "Logo Branding",
            desc: "Unique logo designs that represent your brand identity. Complete with color palettes, typography, and style guidelines.",
            icon: <Palette size={26} />,
          },
          {
            title: "Rebranding",
            desc: "Transform your existing brand with a fresh, modern look. Complete visual identity overhaul to stay relevant and competitive.",
            icon: <RefreshCcw size={26} />,
          },
          {
            title: "Video Editing",
            desc: "Professional video editing services using DaVinci Resolve. From promotional videos to social media content.",
            icon: <Video size={26} />,
          },
        ].map((service, i) => (
          <div
  key={i}
  className="
    cursor-pointer relative bg-white rounded-2xl p-8 shadow-md border border-gray-100
    transition-all duration-300
    hover:scale-105 hover:shadow-xl hover:z-10
    group-hover:[&:not(:hover)]:blur-sm
  "
>

            <div
              className={`mb-6 w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300
  ${
    service.highlight
      ? "bg-green-600 text-white"
      : "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white"
  }`}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-clash font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 font-clash text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
