import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex justify-between">
        {/* Company Info */}
        <div>
          <h2 className="font-bold text-lg">Graphura India Private Limited</h2>
          <p className="mt-2 text-sm">
            Head Office: Pataudi, Haryana, 122503
          </p>
          <p className="mt-1 text-sm">Phone: +91 7378021327</p>
          <p className="mt-1 text-sm">Email: info@graphura.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Lines</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:underline">Employer</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <h3 className="font-semibold mb-2">Others</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">How it Works</a></li>
            <li><a href="#" className="hover:underline">Terms & Condition</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Milestone</a></li>
            <li><a href="#" className="hover:underline">Web mail</a></li>
            <li><a href="#" className="hover:underline">Board of Directors</a></li>
            <li><a href="#" className="hover:underline">Senior Management</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 pt-4 text-center text-sm">
        © Copyright : 2025 Graphura |{" "}
        <a href="#" className="hover:underline">Mail Login</a>
      </div>
    </footer>
  );
};

export default Footer;
