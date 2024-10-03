import React from "react";

export default function BlogsSection() {
  return (
    <section id="blogs" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-emerald-400">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="rounded-lg border border-gray-700 bg-gray-800 text-gray-100 shadow-sm">
              <img
                src="/blog.jpg"
                alt="Blog image"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Exciting Adventure Blog {item}</h3>
                <p className="text-sm text-emerald-400 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="mt-4 bg-emerald-600 text-white hover:bg-emerald-700"variant="outline">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
