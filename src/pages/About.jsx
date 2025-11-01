import React from "react";
import { aboutData } from "../data/about";

export default function About() {
  const { header, founders, topics, footer } = aboutData;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Header Section */}
      <div
        className="relative flex flex-col justify-center items-center text-center py-32 px-6"
        style={{
          backgroundImage: `url(${header.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {header.title.split(" ")[0]}{" "}
            <span className="text-red-500">
              {header.title.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">{header.subtitle}</p>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            {header.description}
          </p>
        </div>
      </div>

      {/* Founders Section */}
      <div className="grid md:grid-cols-2 gap-10 px-6 md:px-20 py-20">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-red-500/20 transition flex flex-col md:flex-row items-center md:items-start"
          >
            <img
              src={founder.image}
              alt={founder.name}
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-2 border-red-500 mb-6 md:mb-0 md:mr-6"
            />
            <div>
              <h2 className="text-2xl font-semibold text-red-400 mb-4">
                {founder.name}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {founder.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Topics Section */}
      <div className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          The series covers a wide range of topics related to used cars, including
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-red-500/20 transition flex flex-col"
            >
              <div className="text-4xl mb-4">{topic.icon}</div>
              <h3 className="text-xl font-semibold text-red-400 mb-2">
                {topic.title}
              </h3>
              <p className="text-sm text-gray-400 mb-1 italic">
                {topic.subtitle}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-20 pb-16 text-gray-400 text-sm px-6">
        <p>
          {footer.note} Visit{" "}
          <a
            href={footer.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 underline"
          >
            {footer.linkText}
          </a>
        </p>
      </div>
    </div>
  );
}
