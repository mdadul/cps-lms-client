import React from 'react'

export default function NewsCard({imglink, title, description, postlink, date}) {
  return (
    <article className="mx-auto my-10 flex max-w-md flex-col rounded-2xl bg-white px-4 shadow md:max-w-5xl md:flex-row md:items-center">
    <div className="shrink-0 my-4 md:mr-8 md:max-w-sm">
    <img className="rounded-2xl" src={imglink} alt="CPS_Official_Logo" />
    </div>
    <div className="py-4 sm:py-8">
        <a href={postlink} target='_blank' rel="noreferrer" className="mb-6 block text-3xl font-medium text-blue-600">{title}</a>
        <p className="mb-6 text-gray-500">{description}</p>
        <div className="flex items-center"> <a href={postlink} target='_blank'rel="noreferrer" className="text-red-500 font-bold">Read Full News...</a>
            <p className="ml-4 w-56">
                <span className="text-sm text-gray-400">{date}</span>
            </p>
        </div>
    </div>
</article>
  )
}
