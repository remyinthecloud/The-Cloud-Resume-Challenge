import React from "react";

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="min-h-screen bg-white-500 py-24 px-6 text-gray-800 text-center"
    >
      <h2 className="text-4xl font-bold mb-6">My Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-200 rounded-lg shadow-md p-4">Project 1</div>
        <div className="bg-gray-200 rounded-lg shadow-md p-4">Project 2</div>
        <div className="bg-gray-200 rounded-lg shadow-md p-4">Project 3</div>
      </div>
    </section>
  );
};

export default PortfolioSection;
