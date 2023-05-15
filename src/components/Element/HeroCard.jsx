import React from "react";
export default function HeroCard({ number, text }) {
  return (
  
      <div className="inline-block p-8 text-center hover:bg-gray-100">
        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
          <p className="text-purple-800 font-bold text-2xl">{number}</p>
        </div>
        <p className="font-bold tracking-wide text-gray-800">{text}</p>
      </div>
  );
}
