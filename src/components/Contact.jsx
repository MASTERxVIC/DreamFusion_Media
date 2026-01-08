export default function Contact() {
  return (
    <section id="contacts" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:flex md:gap-16">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-3xl font-bespoke font-bold mb-2">
            Get in <span className="text-green-500">Touch</span>
          </h2>
          <p className="text-gray-600 font-clash mb-8">
            Have a project in mind? Let's create something amazing together.
          </p>

          <h3 className="font-clash font-semibold text-lg mb-4">
            Let's Connect
          </h3>
          <p className="text-gray-600 font-clash mb-6">
            I'm always excited to work on new projects and collaborate with
            creative minds. Whether you need a complete brand identity or a
            single poster design, I'm here to help.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-send-icon lucide-send  text-green-500"
                >
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                  <path d="m21.854 2.147-10.94 10.939" />
                </svg>
              </div>
              <div>
                <p className="font-clash font-medium">Email</p>
                <p className="font-clash text-gray-500">katul2469@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-phone-call-icon lucide-phone-call text-green-500"
                >
                  <path d="M13 2a9 9 0 0 1 9 9" />
                  <path d="M13 6a5 5 0 0 1 5 5" />
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
              </div>
              <div>
                <p className="font-clash font-medium">Phone</p>
                <p className="font-clash text-gray-500">+91 9955075411</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-map-pinned-icon lucide-map-pinned text-green-500"
                >
                  <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
                  <circle cx="12" cy="8" r="2" />
                  <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
                </svg>
              </div>
              <div>
                <p className="font-clash font-medium">Location</p>
                <p className="font-clash text-gray-500">Available Worldwide</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="https://www.behance.net/atulkumar50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 bg-gray-100 font-clash font-medium hover:bg-green-500 hover:text-white rounded-full">
                Behance
              </button>
            </a>
            <a
              href="https://www.instagram.com/atulbeasts2025/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 bg-gray-100 font-clash font-medium hover:bg-green-500 hover:text-white rounded-full">
                Instagram
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/atul-kumar-012065234/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 bg-gray-100 font-clash font-medium hover:bg-green-500 hover:text-white rounded-full">
                LinkedIn
              </button>
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 bg-gray-50 p-8 rounded-xl shadow-md">
          <form
            action="https://formsubmit.co/katul2469@gmail.com"
            method="POST"
            className="space-y-4"
          >
            <input
              type="hidden"
              name="_next"
              value="http://localhost:5174/thankyou"
            />
            <input type="hidden" name="_captcha" value="false" />
            <div>
              <label className="block font-clash font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full font-clash px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block font-clash font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="w-full font-clash px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block font-clash font-medium text-gray-700 mb-1">
                Service Needed
              </label>
              <select
                name="service"
                className="w-full font-clash  px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option>Select a service</option>
                <option>Branding</option>
                <option>Web Design</option>
                <option>UI/UX</option>
                <option>Marketing</option>
              </select>
            </div>

            <div>
              <label className="block font-clash font-medium text-gray-700 mb-1">
                Project Details
              </label>
              <textarea
                name="projectDetails"
                rows="4"
                placeholder="Tell me about your project..."
                className="w-full font-clash px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full font-clash font-medium bg-green-500 text-white py-3 rounded-full flex justify-center items-center gap-2 hover:bg-green-600 transition"
            >
              Notify Atul
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
