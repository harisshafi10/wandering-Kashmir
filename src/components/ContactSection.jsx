import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-emerald-400">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4">
            <input placeholder="Your Name" className=" w-full  h-14 bg-gray-700 text-gray-100 border-gray-600" />
            <input type="email" placeholder="Your Email" className=" w-full h-14 bg-gray-700 text-gray-100 border-gray-600" />
            <textarea placeholder="Your Message" className="w-full p-2 border rounded bg-gray-700 text-gray-100 border-gray-600" rows="4"></textarea>
            <button type="submit" className="w-full h-14 bg-emerald-600 text-white hover:bg-emerald-700">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
