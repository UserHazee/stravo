import React from 'react';

export default function MobileResponsiveCard() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="flex flex-col w-full max-w-5xl overflow-hidden text-white bg-black rounded-2xl md:flex-row">
        {/* Left Content */}
        <div className="flex flex-col justify-center flex-1 p-10">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Why is mobile responsiveness crucial for businesses today?
          </h1>
          <p className="text-lg text-gray-400">Web Design</p>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center flex-1 bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
            alt="Phone"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
