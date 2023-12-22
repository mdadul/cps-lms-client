import React from "react";

export default function Card() {
  return (
    <div className="p-5 md:p-6 space-y-6 rounded-lg bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-900 shadow-2xl shadow-gray-100/70 dark:shadow-gray-800/80">
      <p className="font-medium text-gray-700 dark:text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at ipsa
        pariatur culpa iste dolore aliquid officia modi quas vel inventore
        animi, error commodi distinctio eum accusamus? Accusantium, tempora
        quisquam!
      </p>
      <div className="flex items-start gap-4">
        <img
          src="/images/sidebiew.webp"
          alt="Author avatar"
          className="w-12 h-12 rounded-full flex object-cover"
        />
        <div className="space-y-1 flex-1">
          <h2 className="text-lg font-semibold leading-none text-gray-800 dark:text-gray-200">
            John Doe
          </h2>
          <p className="text-gray-600 dark:text-gray-400">SEO Kelasi-AI SARL</p>
        </div>
      </div>
    </div>
  );
}
