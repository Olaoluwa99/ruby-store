const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFF8F7] text-[#1E1B1B] border-t border-[#D3C3C1] px-6 py-10 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h2 className="text-base font-semibold text-[#725855] mb-3">
            Ruby store
          </h2>
          <p>
            Your go-to store for quality products, unbeatable prices, and smooth
            shopping.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#5C4541] mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:text-[#725855]">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-[#725855]">
                Products
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-[#725855]">
                Cart
              </a>
            </li>
            <li>
              <a href="/checkout" className="hover:text-[#725855]">
                Checkout
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[#5C4541] mb-2">Resources</h3>
          <ul className="space-y-1">
            <li>
              <a href="/privacy" className="hover:text-[#725855]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-[#725855]">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-[#725855]">
                Help Center
              </a>
            </li>
            <li>
              <a
                href="mailto:support@shopwise.com"
                className="hover:text-[#725855]"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[#5C4541] mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-1">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#725855]"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#725855]"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#725855]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-[#4F4443] mt-10 border-t border-[#D3C3C1] pt-4">
        &copy; {currentYear} Ruby Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
