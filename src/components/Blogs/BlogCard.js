import React from 'react'

export default function BlogCard({date, title, description, image, link, author}) {
    return (
        <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <a href={link} class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                <img src={image} loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>

            <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">{date}</span>

                <h2 class="text-xl font-bold text-gray-800">
                    <a href={link} class="transition duration-100 hover:text-rose-500 active:text-rose-600">{title}</a>
                </h2>

                <p class="text-gray-500">{description}</p>

                <h3 class="text-sm font-semibold text-gray-800">By- {author}</h3>
                <div>
                    <a href={link} class="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700">Read more</a>
                </div>
            </div>
        </article>

    )
}
