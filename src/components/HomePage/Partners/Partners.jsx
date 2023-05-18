import React from 'react'

export default function Partners() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-500 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                <defs>
                  <pattern id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e" x="0" y="0" width=".135" height=".30">
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)" width="52" height="24" />
              </svg>
              <span className="relative">Our</span>
            </span>{" "}
            Partner
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          We are thrilled to announce that <b>Programming Shikho- PS</b> has partnered with <b>Microsoft for Startups Founders Hub</b>! This exciting collaboration brings together two innovative organizations dedicated to promoting entrepreneurship and empowering the next generation of technology leaders.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-auto h-auto m-4">
            <img src="https://mktdplp102wuda.azureedge.net/org-f4f78f7fa763412990f7f7ed79822b61/ba042d2e-95c0-ec11-983e-000d3a33908e/B2tXV68nr_6lraxPmSTeJsZ0O366bCH3mVOxHcDfKcY%21" alt="airbnb" />
          </div>
        </div>
      </div>
  )
}
