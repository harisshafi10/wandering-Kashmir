import React from "react";

export default function BuySection() {
  return (
    <section id="buy" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-emerald-400">Buy Equipment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="rounded-lg border border-gray-700 bg-gray-900 text-gray-100 shadow-sm">
              <img
                src="./placeholder.svg"
                alt="Product image"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Outdoor Item {item}</h3>
                <p className="text-sm text-emerald-400">High-quality gear for your adventures</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold">$99.99</span>
                  <button className="bg-emerald-600 text-white hover:bg-emerald-700 rounded">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
