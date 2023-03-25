import React from 'react'
import Layout from '../components/common/Layout'
import Search from '../components/CoursesPage/Search'

export default function Blog() {
    return (
        <Layout>
            <Search />

            <div class='flex items-center justify-center min-h-screen'>
                <button type="button" class="bg-indigo-400 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]" disabled>
                    <div class="flex items-center justify-center m-[10px]">
                        <div class="h-64 w-64 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                        <div class="ml-2"> Comming Soon... <div>
                        </div>
                        </div>
                    </div>
                </button>
            </div>
        </Layout>
    )
}

