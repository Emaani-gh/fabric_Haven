import { useState } from "react";

useState;

const Testimonies = () => {
  const testimonials = [
    {
      text: "FabricNest has been my go-to source for premium fabrics for over five years. Their silk collection is absolutely exceptional, and the quality is consistently outstanding. The customer service team truly understands the needs of professional designers.",
      name: "Sarah Chen",
      role: "Fashion Designer",
      company: "Chen Couture",
      img: "/images/testi-pic.jpg",
      rating: 3,
    },
    {
      text: "The home decor fabric collection at FabricNest is unmatched. I've furnished countless luxury homes with their upholstery fabrics, and my clients are always impressed with the quality and durability. Highly recommended for any interior project.",
      name: "JMichael Rodriguez",
      role: "Interior Designer",
      company: "Rodriguez Interiors",
      img: "/images/testi-pic.jpg",
      rating: 5,
    },
    {
      text: "As a quilting artist, I need fabrics that not only look beautiful but also hold up to intricate stitching. FabricNest's cotton collection is perfect for my work. The organic options are especially wonderful for eco-conscious projects.",
      name: "Emma Thompson",
      role: "Quilting Artist",
      company: "Thompson Quilts",
      img: "/images/testi-pic.jpg",
      rating: 4,
    },

    {
      text: "Working in theater requires fabrics that can withstand the demands of live performance while looking stunning under stage lights. FabricNest's specialty fabrics have been essential for our Broadway productions. Their expertise is invaluable.",
      name: "David Kim",
      role: "Costume Designer",
      company: "Broadway Productions",
      img: "/images/testi-pic.jpg",
      rating: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-linear-to-b from-amber-50 to-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl section-header text-stone-800 mb-6 ">
            What Our Customers Say
          </h2>
          <p className="max-w-3xl text-xl text-stone-600 mx-auto">
            Hear from designers, crafters, and textile enthusiasts who trust
            FabricNest for their most important projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card relative bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center">
              <div className="stars text-2xl">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <i key={i} className="ri-star-fill text-amber-500"></i>
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-stone-700 leading-relaxed mb-8 italic">
                "{current.text}"
              </blockquote>
            </div>
            <div className="flex justify-center space-x-2 items-center">
              <img
                className="w-16 h-16 rounded-full object-cover"
                src={current.img}
                alt="testimony pic"
              />
              <div>
                <h4 className="font-semibold text-stone-800 text-lg">
                  {current.name}
                </h4>
                <p className="text-stone-700">{current.role}</p>
                <p className="text-amber-800 font-medium">{current.company}</p>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full flex justify-center items-center bg-stone-100"
              >
                <i className="ri-arrow-left-line text-stone-600 text-xl"></i>
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                      i === currentIndex ? "bg-amber-600" : "bg-stone-300"
                    }`}
                  ></button>
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full flex justify-center items-center bg-stone-100"
              >
                <i className="ri-arrow-right-line text-stone-600 text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-4 mt-16">
          <div className="text-center">
            <div className="text-4xl text-amber-700 font-bold mb-2">
              10,000+
            </div>
            <div className="text-stone-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-amber-700 font-bold mb-2">500+</div>
            <div className="text-stone-600">Premium Fabrics</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-amber-700 font-bold mb-2">50+</div>
            <div className="text-stone-600">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-amber-700 font-bold mb-2">4.9/5</div>
            <div className="text-stone-600">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
