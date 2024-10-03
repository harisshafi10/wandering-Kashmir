import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-emerald-400">About Wandering Kashmir</h2>
            <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Wandering Kashmir is your ultimate destination for outdoor adventures in the beautiful region of Kashmir. We provide high-quality equipment for purchase and rental, ensuring that you have the best gear for your expeditions.
            </p>
            <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our mission is to make outdoor adventures accessible to everyone, whether you're a seasoned trekker or a first-time camper.
            </p>
          </div>
          <img
            src="/about.jpg"
            alt="About Wandering Kashmir"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}
