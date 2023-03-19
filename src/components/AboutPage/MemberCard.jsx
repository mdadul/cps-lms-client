import React from 'react'

export default function MemberCard({ img, title, description }) {
    return (

        <div className="relative rounded-xl border-t-4 border-blue-200 bg-white shadow mb-5">
            <div className="flex flex-col items-center py-10">
                <div className="-mt-20 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 text-white">

                    <img
                        src={img}
                        className="rounded-full h-16 w-16 object-cover"
                    />
                </div>
                <span className="mt-3 font-medium capitalize"> {title}</span>
                <p className="mt-3 text-center">{description}</p>
            </div>
        </div>

    )
}
