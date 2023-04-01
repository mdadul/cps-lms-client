import React from 'react'
import BlogCard from '../components/Blogs/BlogCard'
import Layout from '../components/common/Layout'
import Search from '../components/CoursesPage/Search'
import One from '../img/Blog/one.png'

export default function Blog() {
    return (
        <Layout>
            <Search />
            <section class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-xl px-4 md:px-8">

                    <div class="mb-10 md:mb-16">
                        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Most Recent Posts</h2>

                        <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>
                    </div>

                    <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
                    <BlogCard
                        title="Problem in Character input after an integer input in C programming"
                        image={One}
                        description="In C programming, when you use the scanf function to take input from the user, it can be tricky to take input a char after an int because the newline character (\n) left in the input buffer by the previous scanf call can be read as the next input by the following scanf call, resulting in unexpected behavior."
                        date={new Date().toDateString()}
                        link= "https://medium.com/@sorowarmahabub1709vip/problem-in-character-input-after-an-integer-input-in-c-programming-783d2796a40d"
                    />

                    <BlogCard
                        title="Problem in Character input after an integer input in C programming"
                        image={One}
                        description="In C programming, when you use the scanf function to take input from the user, it can be tricky to take input a char after an int because the newline character (\n) left in the input buffer by the previous scanf call can be read as the next input by the following scanf call, resulting in unexpected behavior."
                        date={new Date().toDateString()}
                    />

                    <BlogCard
                        title="Problem in Character input after an integer input in C programming"
                        image={One}
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                        date={new Date().toDateString()}
                    />

                    <BlogCard
                        title="Problem in Character input after an integer input in C programming"
                        image={One}
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                        date={new Date().toDateString()}
                    />
                    </div>
                </div>
            </section>
        </Layout >
    )
}

