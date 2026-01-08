import "./flip.css";

export default function ThankYou() {
  return (
    <div
      className="min-h-screen flex justify-center items-center px-4"
      style={{ background: "linear-gradient(to bottom, #07C229, #013109)" }}
    >
      {/* Flip Card Container */}
      <div className="flip-card w-full max-w-[500px] h-[500px] md:h-[500px] relative">
        {/* Capsule - Top Right */}
        <div className="absolute top-4 right-4 bg-white bg-opacity-80 text-green-600 font-clash font-semibold px-4 py-1 rounded-full shadow-lg z-10">
          Hover Me
        </div>

        <div className="flip-card-inner w-full h-full">
          {/* Front Side - Image */}
          <div className="flip-card-front w-full h-full">
            <img
              src="/assets/AtulPromo.png"
              alt="Atul Promo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Back Side - Message */}
          <div className="flip-card-back w-full h-full">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center w-full h-full flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bespoke font-bold text-green-500 mb-4">
                Thank You!
              </h1>
              <p className="text-gray-600 font-clash mb-6">
                Your message has been successfully sent. I’ll get back to you soon.
              </p>
              <a
                href="/"
                className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-clash font-medium hover:bg-green-600 transition"
              >
                Go Back Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
