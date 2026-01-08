export default function About() {
  return (
    <section id="about" className="w-full py-24 px-6 lg:px-20">
      
      {/* Section Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bespoke font-extrabold text-gray-900">
          About <span className="text-green-500">Me</span>
        </h2>
        <p className="mt-3 font-clash font-normal text-gray-500">
          Self-taught designer passionate about creating visual stories
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left Card */}
        <div className="relative flex justify-center px-4">
  <div className="relative flex justify-center px-4">
  <img
    src="/public/assets/AtulPromo.png"
    alt="Atul Promo"
    className="
      w-full
      max-w-[280px]
      sm:max-w-[340px]
      md:max-w-[400px]
      lg:max-w-[460px]
      h-auto
      object-contain
      rounded-2xl
    "
  />
</div>

          {/* Experience Badge */}
          <div className="absolute top-6 right-0 bg-white rounded-xl px-5 py-4 shadow-xl text-center flex flex-col items-center gap-1
          border border-green-600 
                shadow-lg shadow-green-500/40 
                ring-2 ring-green-500/30">
  
  {/* Award Icon */}
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
    className="text-green-600"
  >
    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
    <circle cx="12" cy="8" r="6" />
  </svg>

  <p className="text-xl font-bold font-bespoke text-gray-700">3+</p>
  <p className="text-sm text-gray-500 font-clash font-medium">
    Years Experience
  </p>
</div>


       {/* Clients Badge */}
<div className="absolute bottom-20 left-5 bg-white rounded-xl px-5 py-4 text-center flex flex-col items-center gap-1 
                border border-green-600 
                shadow-lg shadow-green-500/40 
                ring-2 ring-green-500/30">

  {/* Users Icon */}
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
    className="text-green-600"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <path d="M16 3.128a4 4 0 0 1 0 7.744" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <circle cx="9" cy="7" r="4" />
  </svg>

  <p className="text-xl font-bold font-bespoke text-gray-700">30+</p>
  <p className="text-sm text-gray-500 font-clash font-medium">
    Happy Clients
  </p>
</div>


        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-2xl font-bespoke font-bold text-gray-900 mb-4">
            Self-Taught Designer <span className="text-green-600 ">& Creative Storyteller</span>
          </h3>

          <p className="text-gray-600  font-clash font-normal leading-relaxed mb-4">
            I'm a passionate freelance graphic designer and video editor
            specializing in creating visually compelling designs that tell
            stories. With expertise in Photoshop, Canva, and DaVinci Resolve,
            I've helped numerous clients bring their creative visions to life
            through poster designs, logo branding, and complete rebranding
            solutions.
          </p>

          <p className="text-green-600  font-clash font-medium leading-relaxed mb-8">
            My mission is to craft unique visual identities that resonate with
            audiences and elevate brands to new heights.
          </p>

          {/* Skills */}
          <div>
            <h4 className="font-clash font-semibold text-gray-900 mb-5">
              My Skills
            </h4>

            {[
              { name: "Adobe Photoshop", value: "90%" },
              { name: "Canva", value: "83%" },
              { name: "DaVinci Resolve", value: "90%" },
              { name: "Adobe Illustrator", value: "85%" },
              { name: "Brand Strategy", value: "60%" },
              { name: "Typography", value: "92%" },
              { name: "Blender", value: "30%" },
            ].map((skill, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-clash font-medium text-gray-700">
                    {skill.name}
                  </span>
                  <span className="text-sm font-clash font-semibold text-gray-500">
                    {skill.value}
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full  bg-green-500 rounded-full"
                    style={{ width: skill.value }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="mt-10">
            <h4 className="font-clash font-semibold text-gray-900 mb-4">
              Used Tools
            </h4>

            <div className="flex flex-wrap gap-3">
              {["Photoshop", "Canva", "DaVinci Resolve", "Illustrator"].map(
                (tool, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border border-green-200 text-green-600 bg-green-50 text-sm font-medium font-clash "
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
