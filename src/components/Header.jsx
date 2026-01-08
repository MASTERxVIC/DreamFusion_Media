import Logo from "/public/LogoColor.svg";

export default function Header() {
  return (
    <header className="w-full px-6 lg:px-16 py-4 flex items-center justify-between">
      {/* Logo */}
      <img
        src={Logo}
        alt="Dreamfusion Media Logo"
        className="h-12 w-auto cursor-pointer"
      />

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-gray-700 font-clash font-medium">
        <a href="#about" className="hover:text-black transition">About</a>
        <a href="#services" className="hover:text-black transition">Services</a>
        <a href="#projects" className="hover:text-black transition">Projects</a>
        <a href="#testimonials" className="hover:text-black transition">
          Testimonials
        </a>
      </nav>

      {/* CTA Button */}
      <a href="#contacts">
      <button className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-2 rounded-full font-clash font-medium shadow">
        Get in Touch
      </button>
      </a>
    </header>
  );
}
