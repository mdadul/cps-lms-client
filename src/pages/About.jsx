import React from 'react'
import MemberCard from '../components/AboutPage/MemberCard'
import Layout from '../components/common/Layout'


export default function About() {
  return (
    <Layout>
      <div className="mx-auto my-10 max-w-lg px-4 text-gray-600 md:max-w-screen-lg">
        <div className="mb-10 flex flex-col border-t-4 border-blue-600 pt-4 md:flex-row">
          <h2 className="mr-auto mb-4 text-4xl font-medium lg:text-3xl">Experience of <span className="whitespace-nowrap text-blue-600 md:text-gray-600">2 Decades</span></h2>
          <a href="#" className="text-lg font-medium underline hover:text-blue-600">Read our Story</a>
        </div>
        <div className="flex flex-col md:flex-row">
          <div>
            <p className="mb-4 md:pr-10 md:text-xl md:leading-relaxed lg:pr-28">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis omnis sint debitis sequi animi quaerat repellendus id distinctio dolores minus.</p>
            <p className="md:pr-10 md:text-xl md:leading-relaxed lg:pr-28">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus eos quod hic perspiciatis, consectetur suscipit maxime mollitia minima. Enim consequatur ab praesentium ipsum neque dolore expedita, earum rerum reiciendis nihil, deleniti id atque consequuntur necessitatibus distinctio aliquid explicabo quo obcaecati?</p>
          </div>
          <p className="hidden uppercase md:block md:text-7xl">
            Since <br />
            <span className="whitespace-nowrap text-blue-600">20 Years</span>
          </p>
        </div>
      </div>

      <section className="bg-gray-800 py-10 leading-6 text-blue-900 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-xl">
            <span className="absolute -top-4 h-2 w-14 bg-white"></span>
            <h2 className="text-xl font-medium leading-9 text-white sm:text-3xl sm:leading-tight">Impressive Results in 2 Years</h2>
            <p className="text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae enim cupiditate necessitatibus tempore molestias?</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:mt-24 lg:grid-cols-4">
            <MemberCard img="https://avatars.githubusercontent.com/u/76944781?s=40&v=4"
              title="Sorowar Mahabub"
              description="Our Bosskjdbnrstnbuiorn  bkjre nb routine"/>
            <MemberCard img="https://avatars.githubusercontent.com/u/76944781?s=40&v=4" title="Sorowar Mahabub" description="Our Bosskjdbnrstnbuiorn  bkjre nb routine"/>
            <MemberCard img="https://avatars.githubusercontent.com/u/76944781?s=40&v=4" title="Sorowar Mahabub" description="Our Bosskjdbnrstnbuiorn  bkjre nb routine"/>
            <MemberCard img="https://avatars.githubusercontent.com/u/76944781?s=40&v=4" title="Sorowar Mahabub" description="Our Bosskjdbnrstnbuiorn  bkjre nb routine"/>
            <MemberCard img="https://avatars.githubusercontent.com/u/76944781?s=40&v=4" title="Sorowar Mahabub" description="Our Bosskjdbnrstnbuiorn  bkjre nb routine"/>
          </div></div>




      </section>


    </Layout>
  )
}
