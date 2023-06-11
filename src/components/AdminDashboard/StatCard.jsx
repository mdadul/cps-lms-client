import React from 'react'

export default function StatCard({title, value}) {
  return (
    <div class="max-w-md rounded-lg border px-6 pt-6 pb-10 bg-white">
    <div class="inline-block rounded-full border-8 border-emerald-50 bg-emerald-200 p-2 text-emerald-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </div>
    <p class="text-sm font-medium text-gray-500">{title}</p>
    <p class="text-4xl font-medium text-gray-800">{value}</p>
  </div>
  )
}
