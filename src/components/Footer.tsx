import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-500">
      <section className="w-full border-t border-b border-gray-200"></section>
      <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-6 md:px-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          <div className="md:col-span-1 text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <img src={Logo} alt="Dev Stack" className="w-26.25 h-auto" />
            </div>

            <p className="mx-auto md:mx-0 max-w-77.5 text-[11px] leading-5 text-gray-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-5 flex justify-center md:justify-start items-center gap-4 text-[11px] text-gray-500">
              <a href="#" className="hover:text-pink-500">
                GitHub
              </a>

              <span className="text-gray-300">•</span>

              <a href="#" className="hover:text-pink-500">
                Twitter
              </a>

              <span className="text-gray-300">•</span>

              <a href="#" className="hover:text-pink-500">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hidden md:block text-left">
            <h3 className="mb-4 text-[11px] font-semibold uppercase text-gray-700">
              Product
            </h3>

            <ul className="space-y-3 text-[11px] text-gray-400">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Technologies</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block text-left">
            <h3 className="mb-4 text-[11px] font-semibold uppercase text-gray-700">
              Company
            </h3>

            <ul className="space-y-3 text-[11px] text-gray-400">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block text-left">
            <h3 className="mb-4 text-[11px] font-semibold uppercase text-gray-700">
              Legal
            </h3>

            <ul className="space-y-3 text-[11px] text-gray-400">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-12 border-t border-gray-100 pt-5">
          <div className="flex items-center justify-between text-[9px] text-gray-400">
            {/* Copyright */}
            <p>©️ 2026 Dev Stack. All rights reserved.</p>

            {/* Privacy / Terms */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-pink-500">
                Privacy
              </a>

              <a href="#" className="hover:text-pink-500">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
