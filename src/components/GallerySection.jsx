import React from "react";

export default function GallerySection() {
  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-emerald-400">Adventure Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <img
              key={item}
              src="./placeholder.svg"
              alt={`Adventure image ${item}`}
              className="w-full h-40 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
