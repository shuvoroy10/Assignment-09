import React from 'react';

const Footer = () => {
    return (
        <div className="bg-black text-gray-300 px-8 py-12 ">
      <footer className="container mx-auto">
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-2">
              WarmPaws – Pet Care in Winter
            </h3>
            <p className="text-sm">
              We provide best services for your pet. For any issue contact us.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Saled</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Orders</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <ul className="space-y-1 text-sm">
              <li>@Playstore</li>
              <li>@Appstore</li>
              <li>@Windows/Linus</li>
              <li>support@WarmPaws.com</li>
            </ul>
          </div>
        </div>
        <div className="text-left md:text-center text-white text-sm mt-8">
          © 2025 WarmPaws.
          <br className="block md:hidden" /> All rights reserved.
        </div>
      </footer>
    </div>
    );
};

export default Footer;