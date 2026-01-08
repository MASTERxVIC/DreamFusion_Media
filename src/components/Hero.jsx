export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      
      {/* Soft green glow background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,#86efac55,transparent_40%),radial-gradient(circle_at_80%_70%,#86efac55,transparent_40%)]" />

      {/* Availability Badge */}
      <span className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        Available for Freelance Projects
      </span>
      

      {/* Main Heading */}
      <h1 className="text-4xl md:text-7xl font-bespoke font-bold leading-tight text-gray-900">
        Creative Design That <br />
        <span className="text-green-500">Brings Ideas to Life</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-2xl font-clash font-normal text-gray-600 text-lg">
        Freelance graphic designer specializing in poster design, logo branding,
        and video editing. Let's transform your vision into stunning visuals.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a href="#projects">
  <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium shadow flex items-center gap-2">
    View Work

   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-chevron-right-icon lucide-circle-chevron-right"><circle cx="12" cy="12" r="10"/><path d="m10 8 4 4-4 4"/></svg>
  </button>
</a>


        <a
  href="/assets/Growzy Media Atul-Resume.pdf" // yaha aapka resume ka path
  download
  className="border border-gray-300 px-8 py-3 rounded-full font-medium text-gray-700 hover:bg-green-500 hover:text-white flex items-center gap-2"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-file-down-icon lucide-file-down"
  >
    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
    <path d="M14 2v5a1 1 0 0 0 1 1h5" />
    <path d="M12 18v-6" />
    <path d="m9 15 3 3 3-3" />
  </svg>
  Download Resume
</a>

      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12">
        <div>
          <h3 className=" text-3xl md:text-4xl font-bespoke font-semibold">40+</h3>
          <p className="text-gray-600 mt-1 font-clash font-medium">Projects</p>
        </div>
        <div>
          <h3 className=" text-3xl md:text-4xl font-bespoke font-semibold">20+</h3>
          <p className="text-gray-600 mt-1 font-clash font-medium">Happy Clients</p>
        </div>
        <div>
          <h3 className=" text-3xl md:text-4xl font-bespoke font-semibold">3+</h3>
          <p className="text-gray-600 mt-1 font-clash font-medium">Years Experience</p>
        </div>
      </div>

    </section>
  );
}

