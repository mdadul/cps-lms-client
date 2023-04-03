import React from 'react'

export default function NewsCard({imglink, title, description, postlink, date}) {
  return (
    <article class="mx-auto my-10 flex max-w-md flex-col rounded-2xl bg-white px-4 shadow md:max-w-5xl md:flex-row md:items-center">
    <div class="shrink-0 my-4 md:mr-8 md:max-w-sm">
    <img class="rounded-2xl" src={imglink} alt="CPS_Official_Logo" />
    </div>
    <div class="py-4 sm:py-8">
        <a href={postlink} target='_blank' class="mb-6 block text-3xl font-medium text-blue-600">{title}</a>
        <p class="mb-6 text-gray-500">{description}</p>
        <div class="flex items-center"> <a href={postlink} target='_blank' class="text-red-500 font-bold">Read Full News...</a>
            <p class="ml-4 w-56">
                <span class="text-sm text-gray-400">{date}</span>
            </p>
        </div>
    </div>
</article>
  )
}
