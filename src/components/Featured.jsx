const Featured = () => {
  const cards = [
    {
      img: "/images/organic-cotton.jpg",
      title: "Mulberry Silk Charmeuse",
      title_sm: "Luxury Silk",
      desc: "Premium mulberry silk with lustrous finish",
      price: "45.99",
    },
    {
      img: "/images/mulberry.jpg",
      title: "Organic Cotton Voile",
      title_sm: "Organic Cotton ",
      desc: "Soft, breathable organic cotton perfect for summer wear",
      price: "50.99",
    },
    {
      img: "/images/belgian.jpg",
      title: "Belgian Lace Overlay",
      title_sm: "Designer Lace ",
      desc: "Exquisite Belgian lace with intricate floral patterns",
      price: "80.99",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl section-header text-stone-800 mb-6 ">
            Featured Fabrics
          </h2>
          <p className="max-w-3xl text-xl text-stone-600 mx-auto">
            Discover our handpicked selection of premium fabrics, carefully
            curated for designers and crafters who demand excellence in every
            thread.
          </p>
        </div>

        <div className="cards grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-sm">
              <div className="">
                <img
                  className="w-full object-cover h-80"
                  src={card.img}
                  alt=""
                />
              </div>
              <div className="p-4">
                <h4 className="mb-2 text-sm text-amber-700 font-medium text-sms">
                  {card.title_sm}
                </h4>
                <h3 className="mb-2 text-xl font-semibold text-stone-800">
                  {card.title}
                </h3>
                <p className="mb-4 tetx-sm text-stone-600">{card.desc}</p>

                <div className="flex space-x-2 mb-4 items-center">
                  <span className="text-stone-800 font-bold text-2xl">{`GHS ${card.price}`}</span>
                  <span className="text-sm text-stone-600">per yard</span>
                </div>
                <div className="flex">
                  <button className="text-white bg-amber-700 hover:bg-amber-900 rounded-lg px-4 flex-1 py-2">
                    Add To Cart
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

export default Featured;
