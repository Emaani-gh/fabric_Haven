const Collection = () => {
  const categories = [
    {
      img: "/images/bridal.jpg",
      title: "Bridal Elegance",
      desc: "Luxurious fabrics perfect for wedding gowns and special occasion wear",
      quantity: "24",
    },
    {
      img: "/images/sustain-essentials.jpg",
      title: "Sustainable Essentials",
      desc: "Eco-friendly organic fabrics for conscious creators",
      quantity: "20",
    },
    {
      img: "/images/designer_prints.jpg",
      title: "Designer Prints",
      desc: "Exclusive patterns and prints from renowned textile artists",
      quantity: "25",
    },
    {
      img: "/images/home_decor.jpg",
      title: "Home Decor Luxe",
      desc: "Premium upholstery and drapery fabrics for interior design",
      quantity: "28",
    },
  ];

  return (
    <section
      id="collection"
      className="py-20 bg-linear-to-b from-stone-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl section-header text-stone-800 mb-6 ">
            Curated Collections
          </h2>
          <p className="max-w-3xl text-xl text-stone-600 mx-auto">
            Discover our handpicked selection of premium fabrics, carefully
            curated for designers and crafters who demand excellence in every
            thread.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4 categs">
          {categories.map((categ, i) => (
            <div
              key={i}
              className={`rounded-3xl overflow-hidden relative shadow-lg hover:shadow-xl transition-all duration-300 group ${
                i % 2 === 0 ? "lg:col-span-2 " : ""
              }`}
            >
              <div className="h-80 lg:h-96 ">
                <img
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  src={categ.img}
                  alt={categ.title}
                />
                <div className="gradient-overlay"></div>
              </div>
              <div className="absolute bottom-0 p-8">
                <h3 className="text-white font-playfair text-2xl lg:text-3xl font-bold mb-4">
                  {categ.title}
                </h3>
                <p className="text-stone-200 mb-4 max-w-2xl">{categ.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-amber-300">{`${categ.quantity} Fabrics`}</span>
                  <button className="btn bg-stone-200 rounded-md text-stone-800 text-sm px-4 py-2 hover:bg-stone-300 transition-colors duration-300">
                    Explore Collections
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
