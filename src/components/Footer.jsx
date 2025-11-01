import React from "react";
import { Facebook, Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
          
          {/* Left Section - Address */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="font-semibold text-lg">Shifting Gears</h3>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              Dag No.84/K.P Patta No.150, Shifting Gears,<br />
              Boragaon, Guwahati, Kamrup Metropolitan,<br />
              Assam, 781035
            </p>
            <div className="flex items-center gap-2 mt-2 text-gray-300 text-sm">
              <MapPin className="w-4 h-4 text-red-600" />
              <span>Guwahati, Assam</span>
            </div>
          </div>

          {/* Middle Section - Links */}
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <a href="/about" className="hover:text-red-600 transition">About</a>
              <a href="/inventory" className="hover:text-red-600 transition">Inventory</a>
              <a href="/services" className="hover:text-red-600 transition">Services</a>
              <a href="/gallery" className="hover:text-red-600 transition">Gallery</a>
              <a href="/baraatis" className="hover:text-red-600 transition">Baraatis</a>
              <a href="/contact" className="hover:text-red-600 transition">Contact</a>
            </div>
          </div>

          {/* Right Section - Contact & Social */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-600 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/shiftinggearsghy/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-600 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:shiftinggearsassam@gmail.com"
                className="hover:text-red-600 transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="text-sm text-gray-300 text-center md:text-right">
              <div>
                Phone:{" "}
                <a href="tel:+916913347000" className="hover:text-red-600">
                  +91 69133 47000
                </a>{" "}
                /{" "}
                <a href="tel:+918011462666" className="hover:text-red-600">
                  80114 62666
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Designed & Maintained by{" "}
          <a
            href="https://themanki.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-600 font-medium"
          >
            TheManki
          </a>{" "}
          — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
