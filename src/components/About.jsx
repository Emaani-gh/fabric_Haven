const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-16 grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl section-header text-stone-800 mb-6">
              Crafting Dreams with Premium Fabrics
            </h2>

            <p className="text xl text-stone-600 mb-8 leading-relaxed">
              For over two decades, FabricNest has been the trusted partner for
              designers, crafters, and textile enthusiasts worldwide. We believe
              that exceptional fabrics are the foundation of extraordinary
              creations.
            </p>

            <p className="text-stone-600 mb-8 leading-relaxed">
              Our passion for textiles drives us to source only the finest
              materials from renowned mills and artisans. From luxurious silk
              charmeuse to organic cotton voile, every fabric in our collection
              tells a story of craftsmanship, quality, and beauty.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-8">
              <div className="flex space-x-4">
                <div className="flex justify-center items-center w-12 h-12 bg-amber-100 shrink-0">
                  <i className="ri-global-line text-xl text-amber-700"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">
                    Worldwide Sourcing
                  </h4>

                  <p className="text-sm text-stone-600">
                    We partner with the finest mills and artisans across the
                    globe to bring you exceptional quality fabrics from renowned
                    textile regions.
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex justify-center items-center w-12 h-12 bg-amber-100 shrink-0">
                  <i className="ri-global-line text-xl text-amber-700"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">
                    Sustainable Practices
                  </h4>

                  <p className="text-sm text-stone-600">
                    Committed to environmental responsibility, we prioritize
                    eco-friendly fabrics and sustainable production methods in
                    our sourcing.
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex justify-center items-center w-12 h-12 bg-amber-100 shrink-0">
                  <i className="ri-global-line text-xl text-amber-700"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">
                    Expert Guidance
                  </h4>

                  <p className="text-sm text-stone-600">
                    Our textile specialists provide personalized consultation to
                    help you choose the perfect fabric for your creative
                    projects.
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex justify-center items-center w-12 h-12 bg-amber-100 shrink-0">
                  <i className="ri-global-line text-xl text-amber-700"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">
                    Quality Guarantee
                  </h4>

                  <p className="text-sm text-stone-600">
                    Every fabric in our collection undergoes rigorous quality
                    testing to ensure it meets our high standards for durability
                    and beauty.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="bg-amber-800 hover:bg-amber-900 px-6 py-3 rounded-lg font-semibold transition duration-300 text-white">
                Learn More About Us
              </button>
              <button className="border-2 border-amber-800 hover:bg-amber-900 px-6 py-3 rounded-lg font-semibold transition duration-300">
                Visit Our Showroom
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                className="w-full h-full object-cover object-center"
                src="/images/profile.jpg"
                alt="profile pic"
              />
              <div className="gradient-overlay"></div>
            </div>
            <div className="bg-white p-6 absolute -top-8 -right-4 rounded-2xl shadow-xl border border-stone-100">
              <div>
                <div className="text-3xl font-bold text-amber-700 mb-1">
                  500+
                </div>
                <div className="text-stone-600 text-sm">Premium Fabrics</div>
              </div>
            </div>

            <div className="bg-white p-6 absolute -bottom-8 -left-6 rounded-2xl shadow-xl border border-stone-100 ">
              <div>
                <div className="text-3xl font-bold text-amber-700 mb-1">
                  20+
                </div>
                <div className="text-stone-600 text-sm">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
