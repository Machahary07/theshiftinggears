import React, { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MessagesSquare,
  Search,
} from "lucide-react";
import gsap from "gsap";
import { cars } from "../data/cars"; // ✅ imported for search functionality

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuAnimating, setMenuAnimating] = useState(false);
  const [query, setQuery] = useState(""); // ✅ search query

  const overlayBlackRef = useRef(null);
  const overlayRedRef = useRef(null);
  const blurBgRef = useRef(null);
  const menuTextRef = useRef(null);
  const menuIconRef = useRef(null);

  const filteredCars = cars.filter((c) =>
    `${c.make} ${c.model}`.toLowerCase().includes(query.toLowerCase())
  );

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect click outside of search box
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".search-container")) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Initial overlay hidden
  useEffect(() => {
    [overlayBlackRef, overlayRedRef, blurBgRef].forEach((ref) => {
      if (!ref.current) return;
      gsap.set(ref.current, {
        scaleY: 0,
        opacity: 0,
        pointerEvents: "none",
        transformOrigin: "top",
      });
    });
  }, []);

  // Handle open/close animations
  useEffect(() => {
    if (open) {
      setMenuAnimating(true);
      const tl = gsap.timeline({
        onComplete: () => setMenuAnimating(false),
      });

      gsap.set(blurBgRef.current, { pointerEvents: "auto" });
      gsap.to(blurBgRef.current, {
        opacity: 1,
        scaleY: 1,
        duration: 0.4,
        ease: "power2.out",
        filter: "blur(6px)",
      });

      tl.set([overlayRedRef.current, overlayBlackRef.current], {
        pointerEvents: "auto",
      })
        .to(overlayRedRef.current, {
          duration: 0.45,
          scaleY: 1,
          opacity: 1,
          ease: "power3.out",
        })
        .to(
          overlayBlackRef.current,
          {
            duration: 0.45,
            scaleY: 1,
            opacity: 1,
            ease: "power3.out",
          },
          "-=0.38"
        )
        .fromTo(
          ".overlay-center-links",
          { y: -20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.25"
        )
        .fromTo(
          ".overlay-social",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
          "-=0.35"
        );

      gsap
        .to(menuTextRef.current, { duration: 0.25, opacity: 0, y: -5 })
        .then(() =>
          gsap.to(menuTextRef.current, {
            duration: 0.25,
            textContent: "Close",
            opacity: 1,
            y: 0,
          })
        );
      gsap.to(menuIconRef.current, {
        rotation: 90,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      setMenuAnimating(true);
      const tl = gsap.timeline({
        onComplete: () => setMenuAnimating(false),
      });

      tl.to(".overlay-center-links", {
        opacity: 0,
        y: -10,
        duration: 0.18,
        stagger: 0.05,
      })
        .to(
          [overlayBlackRef.current, overlayRedRef.current],
          {
            duration: 0.4,
            scaleY: 0,
            opacity: 0,
            ease: "power3.in",
            stagger: 0.08,
          },
          "-=0.05"
        )
        .set([overlayBlackRef.current, overlayRedRef.current], {
          pointerEvents: "none",
        });

      gsap.to(blurBgRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(blurBgRef.current, { pointerEvents: "none" });
        },
      });

      gsap
        .to(menuTextRef.current, { duration: 0.2, opacity: 0, y: -5 })
        .then(() =>
          gsap.to(menuTextRef.current, {
            duration: 0.2,
            textContent: "Menu",
            opacity: 1,
            y: 0,
          })
        );
      gsap.to(menuIconRef.current, {
        rotation: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    }
  }, [open]);

  return (
    <>
      {/* 🔹 Navbar */}
      <header
        className={`w-full fixed top-0 left-0 z-60 transition-all duration-300 ${
          open || menuAnimating
            ? "bg-black shadow-lg"
            : scrolled
            ? "bg-black shadow-md backdrop-blur-sm"
            : "bg-black"
        }`}
      >
        <div className="max-w-[1480px] mx-auto flex items-center justify-between px-4 md:px-6 py-6">
          {/* Left: Hamburger */}
          <div className="flex items-center">
            <button
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <span className="sr-only">Toggle menu</span>
              <span ref={menuIconRef} className="w-6 h-6">
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </span>
              <span
                ref={menuTextRef}
                className="hidden md:inline-block text-sm tracking-wide select-none ml-1"
                style={{ fontFamily: "var(--site-font)" }}
              >
                Menu
              </span>
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center">
            <a href="/" className="inline-flex items-center">
              <img src="/vite.svg" alt="logo" className="h-20 w-auto" />
            </a>
          </div>

          {/* Right: Search + Chat */}
          <div className="flex items-center gap-4">
            {/* 🔍 Search */}
            <div className="relative search-container">
              <button
                onClick={() => setSearchOpen((s) => !s)}
                className="p-2 rounded hover:text-red-600 transition"
                aria-label="search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Search Dropdown */}
              <div
                className={`absolute right-0 mt-2 origin-top-right transform transition-all z-[70] ${
                  searchOpen
                    ? "scale-100 opacity-100"
                    : "scale-75 opacity-0 pointer-events-none"
                }`}
                style={{ minWidth: 250 }}
              >
                <div id="dropdown" className="flex flex-col bg-black text-white rounded-lg shadow-lg overflow-hidden">
                  {/* Input */}
                  <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-200">
                    <Search className="w-4 h-4 text-white" />
                    <input
                      type="text"
                      placeholder="Search cars..."
                      className="bg-transparent outline-none text-sm w-full text-white"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>

                  {/* Results */}
                  {filteredCars.length > 0 ? (
                    <ul className="max-h-60 overflow-y-auto">
                      {filteredCars.map((car) => (
                        <li key={car.id}>
                          <a
                            href={`/car/${car.id}`}
                            onClick={() => {
                              setSearchOpen(false);
                              setQuery("");
                            }}
                            className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
                          >
                            {car.make} {car.model} ({car.yom})
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : query.length > 0 ? (
                    <div className="px-4 py-3 text-sm text-gray-500">
                      No matches found
                    </div>
                  ) : (
                    <div className="px-4 py-3 text-sm text-gray-400">
                      Start typing...
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 🔹 Background blur overlay (click outside to close) */}
      <div
        ref={blurBgRef}
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-md cursor-pointer"
        style={{
          transformOrigin: "top",
          opacity: 0,
          pointerEvents: "none",
        }}
      />

      {/* 🔹 Red overlay */}
      <div
        ref={overlayRedRef}
        className="fixed top-[110px] left-0 w-full h-[60vh] z-45 bg-red-600"
        style={{ transformOrigin: "top" }}
      />

      {/* 🔹 Black overlay */}
      <div
        ref={overlayBlackRef}
        className="fixed top-[110px] left-0 w-full h-[60vh] z-50 bg-black text-white"
        style={{
          transformOrigin: "top",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
        aria-hidden={!open}
      >
        {/* Center Links */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <nav
            className="space-y-6 text-2xl md:text-4xl font-semibold overlay-center-links"
            style={{ fontFamily: "var(--site-font)" }}
          >
            <a href="/about" className="block hover:text-red-600 transition">
              About Us
            </a>
            <a href="/inventory" className="block hover:text-red-600 transition">
              Inventory
            </a>
            <a href="/services" className="block hover:text-red-600 transition">
              Services
            </a>
            <a href="/gallery" className="block hover:text-red-600 transition">
              Gallery
            </a>
            <a href="/Baraatis" className="block hover:text-red-600 transition">
              Baraatis
            </a>
            <a href="/emi-calculator" className="block hover:text-red-600 transition">
              EMI Calculator
            </a>
            <a href="/contact" className="block hover:text-red-600 transition">
              Contact
            </a>
          </nav>
        </div>

        {/* Socials */}
        <div className="absolute left-6 bottom-6 flex flex-col gap-4 overlay-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-600 transition"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-600 transition"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        {/* Contact */}
        <div className="absolute right-6 bottom-6 flex flex-col gap-4 items-end overlay-social">
          <a
            href="mailto:shiftinggearsassam@gmail.com"
            className="hover:text-red-600 transition"
          >
            <Mail className="w-6 h-6" />
          </a>
          <div className="flex gap-3">
            <a href="tel:+916913347000" className="hover:text-red-600 transition">
              <Phone className="w-6 h-6" />
            </a>
            <a href="tel:+918011462666" className="hover:text-red-600 transition">
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[110px]" aria-hidden="true" />
    </>
  );
}
