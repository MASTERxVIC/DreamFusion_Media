import { useState } from "react";
import { projects } from "../data/projects";

const filters = [
  "All",
  "Logo Design",
  "Poster Design",
  "Video Editing",
  "Branding",
  "Rebranding",
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bespoke font-extrabold">
          Featured <span className="text-green-500">Projects</span>
        </h2>
        <p className="text-gray-500 font-clash font-normal mt-2">
          A showcase of my recent work and creative endeavors
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-5 py-2 rounded-full text-sm font-medium font-clash  transition
              ${
                active === item
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
     <div
  key={project.id}
  className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden group"
>
  <div className="relative overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
    />

    {/* Hover Overlay */}
    <div onClick={() => setSelectedProject(project)} 
    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300">
      <div className="absolute bottom-4 left-4 flex items-center gap-2 
                text-white text-xs font-clash font-medium
                opacity-0 group-hover:opacity-100
                transform translate-y-2 group-hover:translate-y-0
                transition-all duration-300">
  View Project

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
    <path d="m21 3-9 9" />
    <path d="M15 3h6v6" />
  </svg>
</div>

    </div>
  </div>

            <div className="p-6">
              <span className="text-xs font-clash font-medium bg-green-100 text-green-600 px-3 py-1 rounded-full">
                {project.tag}
              </span>

              <h3 className="mt-4 font-clash font-semibold text-lg">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-clash font-normal bg-gray-100 px-3 py-1 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-white max-w-5xl w-full mx-4 rounded-2xl p-6 relative">

      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-4 right-4 text-xl font-bold"
      >
        ✕
      </button>

      <h3 className="text-2xl font-clash font-semibold mb-6">
        {selectedProject.title}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  {selectedProject.gallery.map((item, index) =>
    item.endsWith(".mp4") ? (
      <video
        key={index}
        src={item}
        loading="lazy"
        decoding="async"
        controls
        className="rounded-xl w-full h-48 object-cover"
      />
    ) : (
      <img
        key={index}
        src={item}
        alt="Project media"
        loading="lazy"
        decoding="async"
        className="rounded-xl w-full h-48 object-cover cursor-pointer hover:scale-105 transition"
      />
    )
  )}
</div>


    </div>
  </div>
)}

    </section>
  );
}
