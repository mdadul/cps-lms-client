import React from 'react'
import Course from '../../pages/Courses'
import AllCourse from '../AdminDashboard/AllCourse'
import AllCourses from '../CoursesPage/AllCourses'

export default function Dashboard() {
    return (
        <div className='bg-black'>
            <nav className="shadow-md">
                <div className="max-w-7xl px-5 lg:px-0 mx-auto flex justify-between py-3">
                    <img className="h-10" src="../assets/image/learningportal.svg" alt='avater' />
                    <div className="flex items-center gap-3">
                        <h2 className="font-bold">Student</h2>
                        <button
                            className="flex gap-2 items-center px-4 py-1 rounded-full text-sm transition-all bg-red-600 hover:bg-red-700 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
            <section className="py-6 bg-primary">
                <div className="mx-auto max-w-7xl px-5 lg:px-0">
                    <div className="px-3 md:lg:xl:px-40  py-20 bg-opacity-10">
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 p-8">
                            <a href="/Videos" className="dashboard-item-card">
                                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    className="w-8 h-8 text-yellow-500">
                                    <path stroke-linecap="round"
                                        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                                <p className="text-slate-200 mt-3 ">Videos</p>
                            </a>
                            <a href="./Assignment.html" className="dashboard-item-card">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" className="w-8 h-8 text-red-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>
                                <p className="text-slate-200 mt-3">Assignment</p>
                            </a>
                            <a href="./Quizzes.html" className="dashboard-item-card">
                                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    className="w-8 h-8 text-indigo-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                <p className="text-slate-200 mt-3 ">Quizzes</p>
                            </a>
                            <a href="./AssignmentMark.html" className="dashboard-item-card">
                                <svg viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    className="w-8 h-8 text-green-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                <p className="text-slate-200 mt-3 ">Assignment Mark</p>
                            </a>
                        </div>
                    </div>

                    {/* Request for a new course */}
                    <div className="px-3 md:lg:xl:px-40  py-20 bg-opacity-10">
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 p-8">
                            <div className="dashboard-item-card">
                                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    className="w-8 h-8 text-yellow-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6.75v10.5M8.25 12h7.5M3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM20.25 12h.007v.008H20.25V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM12 6.75h.007v.008H12V6.75zm0 10.5h.007v.008H12v-.008zM12 6.75h.007v.008H12V6.75zm0 10.5h.007v.008H12v-.008zM12 6.75h.007v.008H12V6.75zm0 10.5h.007v.008H12v-.008zM12 6.75h.007v.008H12V6.75zm0 10.5h.007v.008H12v-.008zM12 6.75h.007v.008H12V6.75zm0 10.5h.007v.008H12v-.008zM12 6.75h.007v.008H12V6.75zm0 10.5h.007v.008H12v-.008z" />
                                </svg>
                                <a href="/addcourse"> <p className="text-slate-200 mt-3 ">Request for a new course</p></a>
                            </div>
                            <div className="dashboard-item-card">
                                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"

                                    className="w-8 h-8 text-red-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6.75v10.5M8.25 12h7.5M3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM20.25 12h.007v.008H20.25V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM12 6.75h.007v.008H12V6.75zm0 10.5h.007v.008H12v-.008zM12 6.75h.007v.008H12V6.75zm0 10.5h.007v.008H12v-.008z" />
                                </svg>
                                <a href="/contact"> <p className="text-slate-200 mt-3 ">Contact Us</p></a>
                            </div>
                        </div>
                    </div>
                </div>


               <h2 className="text-2xl font-bold text-center text-slate-200">Browse Our All Courses :: Ready For You</h2>
            <AllCourses />
            </section>
        </div>
    )
}
