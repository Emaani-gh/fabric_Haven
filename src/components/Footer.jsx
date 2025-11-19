const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-200">
      <div className="bg-linear-to-r from-amber-50 to-stone-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-stone-800 mb-4 font-playfair">
            Stay Updated with FabricNest
          </h3>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new
            fabric arrivals, exclusive collections, and special offers for
            designers and crafters.
          </p>
          <form className="max-w-md mx-auto flex gap-4" action="">
            <input
              className="flex-1 px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
              placeholder="Enter Your Email here"
              type="text"
            />
            <button
              type="submit"
              className="whitespace-nowrap cursor-pointer font-medium transition-all duration-200 flex items-center justify-center bg-amber-700 text-white hover:bg-amber-800 focus:ring-2 focus:ring-amber-500 px-6 py-3 text-base rounded-lg  px-6"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-pacifico text-xl text-amber-800 mb-4 font-bold">
              FabricNest
            </h4>
            <p className="text-stone-600 mb-4">
              Your trusted source for premium quality fabrics. From luxury silk
              to organic cotton, we provide exceptional textiles for designers
              and crafters worldwide.
            </p>
            <div className="flex space-x-2">
              <a
                className="flex justify-center items-center text-stone-600 w-8 h-8 hover:text-amber-700 transition-colors cursor-pointer"
                href=""
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a
                className="flex justify-center items-center text-stone-600 w-8 h-8 hover:text-amber-700 transition-colors cursor-pointer"
                href=""
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a
                className="flex justify-center items-center text-stone-600 w-8 h-8 hover:text-amber-700 transition-colors cursor-pointer"
                href=""
              >
                <i className="ri-pinterest-line text-xl"></i>
              </a>
              <a
                className="flex justify-center items-center text-stone-600 w-8 h-8 hover:text-amber-700 transition-colors cursor-pointer"
                href=""
              >
                <i className="ri-youtube-line text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className=" mb-4 font-semibold text-stone-800">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href=""
                  className="text-stone-600 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  All Fabrics
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-stone-600 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-stone-600 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  Sale Items
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-stone-600 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  Sample Swatches
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-stone-600 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className=" mb-4 font-semibold text-stone-800">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href=""
                  className="text-stone-600 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  Luxury Silk
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-stone-600 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  Organic Cotton
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-stone-600 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  Fine Linen
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-stone-600 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  Wool Blends
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-stone-600 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  Designer Prints
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className=" mb-4 font-semibold text-stone-800">
              Customer Service
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href=""
                  className="text-stone-600 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-stone-600 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-stone-600 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-stone-600 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  Fabric Care Guide
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-stone-600 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-stone-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-stone-600 mb-4 md:mb-0">
              © 2024 FabricNest. All rights reserved.
            </p>
            <div className="flex space-x-6 items-center">
              <a
                className="text-stone-600 hover:text-amber-600 text-sm transition-colors cursor-pointer"
                href=""
              >
                Privacy Policy
              </a>
              <a
                className="text-stone-600 hover:text-amber-600 text-sm transition-colors cursor-pointer"
                href=""
              >
                Terms of Service
              </a>
              <a
                className="text-stone-600 hover:text-amber-600 text-sm transition-colors cursor-pointer"
                href=""
              >
                Website Builder
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
