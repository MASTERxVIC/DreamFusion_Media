import Logo from "/public/LogoWhite.svg"
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-20 py-10">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
           <img
                  src={Logo}
                  alt="Dreamfusion Media Logo"
                  className="h-20 w-auto cursor-pointer"
                />
          <p className="mt-5 font-clash text-sm text-gray-400">
            Creative graphic design and video editing services for brands that
            want to stand out.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-gray-200 font-clash font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 font-clash">
            <li>
              <a href="#about" className="text-gray-400 hover:text-green-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-400 hover:text-green-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-400 hover:text-green-500 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-green-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-gray-200 font-clash font-semibold mb-2">Services</h3>
          <ul className="space-y-1 font-clash">
            <li>
              <a href="#poster" className="text-gray-400 hover:text-green-500 transition">
                Poster Design
              </a>
            </li>
            <li>
              <a href="#logo" className="text-gray-400 hover:text-green-500 transition">
                Logo Branding
              </a>
            </li>
            <li>
              <a href="#rebranding" className="text-gray-400 hover:text-green-500 transition">
                Rebranding
              </a>
            </li>
            <li>
              <a href="#video" className="text-gray-400 hover:text-green-500 transition">
                Video Editing
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between font-clash text-gray-400 text-sm gap-3">
        <span>©2020-2026 Dreamfusion Media. All rights reserved.</span>
        
        <span>
          Made with <span className="text-red-500 font-clash">❤️</span> by Dreamfusion Media
        </span>
      </div>
    </footer>
  );
};


