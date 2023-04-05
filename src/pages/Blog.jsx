import React from 'react'
import BlogCard from '../components/Blogs/BlogCard'
import Layout from '../components/common/Layout'
import Search from '../components/CoursesPage/Search'
import One from '../img/Blog/one.png'
import Two from '../img/Blog/two.png'
import NewsCard from '../components/News/NewsCard'

export default function Blog() {
    return (
        <Layout>
            <Search />
            <section class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-xl px-4 md:px-8">

                    <div class="mb-10 md:mb-16">
                        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Most Recent Posts</h2>

                        <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Learn the latest trends in programming, web development, design, and more...</p>
                    </div>

                    <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">

                        {/* Blog_No.: 01 */}
                        <BlogCard
                            title="Problem in Character input after an integer input in C programming"
                            image={One}
                            description="In C programming, when you use the scanf function to take input from the user, it can be tricky to take input a char after an int because the newline character (\n) left in the input buffer by the previous scanf call can be read as the next input by the following scanf call, resulting in unexpected behavior."
                            date={new Date().toDateString()}
                            author={"Sorowar Mahabub"}
                            link="https://medium.com/@sorowarmahabub1709vip/problem-in-character-input-after-an-integer-input-in-c-programming-783d2796a40d"
                        />

                        {/* Blog_No.: 02 */}
                        <BlogCard
                            title="Exploring Data Types in C: A Simple Program to Understand int, long long int, char, float, and double"
                            image={Two}
                            description="In this program, we declare variables with different data types. The 'num' variable is of type 'int', 'bigNum' variable is of type 'long long int', 'letter' variable is of type 'char', 'decNum' variable is of type 'float', and 'bigDecNum' variable is of type 'double'. "
                            date={new Date().toDateString()}
                            author={"Sorowar Mahabub"}
                            link="https://medium.com/@sorowarmahabub1709vip/exploring-data-types-in-c-a-simple-program-to-understand-int-long-long-int-char-float-and-4ad9263c176a"
                        />


                        {/* Blog_No.: 03 */}


                        {/* Blog_No.: 04 */}

                    </div>
                </div>
            </section>


            <div class="bg-gray-100 px-2 py-10">
                <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Most Recent News</h2>

                {/* News No.: 01 */}
                <NewsCard
                    title="The Best Award for Competitive Programming Beginner with CPP- Batch-01"
                    description="💥 Congratulations to Nuzhat Farhan, Mehera Fatima & Sultana Akter; who were awarded '#The_Best_Award' for our course 'Competitive Programming Beginner with CPP- Batch-01!' We are proud to announce that our students have shown exceptional performance and dedication to the art of competitive programming."
                    date="March 31, 2023"
                    imglink="https://media.licdn.com/dms/image/D560BAQHdlSYwPcxX2A/company-logo_100_100/0/1680370493545?e=1688601600&v=beta&t=WRVFxBhXzWdKrTE1pJfK_yWn9GK0wWbnzkySgfYmo_Y"
                    postlink="https://www.linkedin.com/feed/update/urn:li:activity:7048137978514214912"
                />

                {/* News No.: 02 */}
                <NewsCard
                    title="The Best Award for Competitive Programming Beginner with CPP- Batch-01"
                    description="💥 Congratulations to Nuzhat Farhan, Mehera Fatima & Sultana Akter; who were awarded '#The_Best_Award' for our course 'Competitive Programming Beginner with CPP- Batch-01!' We are proud to announce that our students have shown exceptional performance and dedication to the art of competitive programming."
                    date="March 31, 2023"
                    imglink="https://media.licdn.com/dms/image/D560BAQHdlSYwPcxX2A/company-logo_100_100/0/1680370493545?e=1688601600&v=beta&t=WRVFxBhXzWdKrTE1pJfK_yWn9GK0wWbnzkySgfYmo_Y"
                    postlink="https://www.linkedin.com/feed/update/urn:li:activity:7048137978514214912"
                />
             
            </div>

        </Layout >
    )
}

