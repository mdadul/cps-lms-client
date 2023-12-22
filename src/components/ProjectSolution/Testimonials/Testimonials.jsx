import React from "react";
import Card from "./Card/Card";

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="max-w-2xl">
          <h1 className="font-bold text-gray-800 dark:text-white text-3xl">
            Client’s Say About Us
          </h1>
        </div>
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card />
          <Card />

          <Card />
          <Card/>
          <Card/>
          <Card />
        </div>
      </div>
    </section>
  );
}
