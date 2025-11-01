import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black py-16 px-6 md:px-16 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl font-bold text-white mb-10 text-center">
        Contact <span className="text-red-600">Us</span>
      </h1>

      {/* Main Container */}
      <div className="w-full max-w-8xl grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-xl">
        {/* LEFT SIDE - Red Background */}
        <div className="bg-red-600 text-black p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-black">
              Connect With Us
            </h2>

            <div className="space-y-4 mb-6 text-black font-medium">
              <p className="flex items-center gap-3">
                <Phone className="text-black" size={20} />
                +91 69133 47000 / 8011462666
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-black" size={20} />
                shiftinggears@theshiftinggears.co.in / shiftinggearsassam@gmail.com
              </p>
              <p className="flex items-start gap-3 leading-snug">
                <MapPin className="text-black mt-1" size={20} />
                Dag No.84/K.P Patta No.150, Shifting Gears, Boragaon, Guwahati,
                Kamrup Metropolitan, Assam, 781035
              </p>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="rounded-xl overflow-hidden border border-black shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57318.43139594271!2d91.6210357486328!3d26.1184338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5d07708f1c69%3A0x1efeb61fdaf78e99!2sShifting%20Gears%20Guwahati-%20A%20Multibrand%20Pre-Owned%20Cars%20Showroom%20%7C%20Second%20Hand%20Cars%20in%20Guwahati%20%7C%20Used%20Car%20Dealer%20in%20Guwahati!5e0!3m2!1sen!2sin!4v1761970009725!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shifting Gears Guwahati"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE - White Background */}
        <div className="bg-white p-8">
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-black text-black"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-black text-black"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-black text-black"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-black text-black"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-black text-black"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-black text-black"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
