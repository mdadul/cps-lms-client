import React from 'react'
import Nav from './Nav'

export default function Grade() {
  return (
    <div className='bg-gradient-to-r from-teal-900 to-gray-600'>
        <Nav />
    <section className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
            <div className="px-3 py-20 bg-opacity-10">
                <ul className="assignment-status">
                    <li>Total <span>4</span></li>
                    <li>Pending <span>3</span></li>
                    <li>Mark Sent <span>1</span></li>
                </ul>
                <div className="overflow-x-auto mt-4">
                    <table className="divide-y-1 text-base divide-gray-600 w-full">
                        <thead>
                            <tr>
                                <th className="table-th">Assignment</th>
                                <th className="table-th">Date</th>
                                <th className="table-th">Student Name</th>
                                <th className="table-th">Repo Link</th>
                                <th className="table-th">Mark</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-600/50">
                            <tr>
                                <td className="table-td">Assignment 1 - Implement Debounce Function</td>
                                <td className="table-td">10 Mar 2023 10:58:13 PM</td>
                                <td className="table-td">Saad Hasan</td>
                                <td className="table-td">https://github.com/Learn-with-Sumit/assignment-1</td>
                                <td className="table-td input-mark">
                                    <input max="100" value="100" />
                                    <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td className="table-td">Assignment 2 - Implement Best Practices</td>
                                <td className="table-td">10 Mar 2023 10:58:13 PM</td>
                                <td className="table-td">Akash Ahmed</td>
                                <td className="table-td">https://github.com/Learn-with-Sumit/assignment-1</td>
                                <td className="table-td">50</td>
                            </tr>
                            <tr>
                                <td className="table-td">Assignment 1 - Scoreboard Application</td>
                                <td className="table-td">10 Mar 2023 10:58:13 PM</td>
                                <td className="table-td">Ferdous</td>
                                <td className="table-td">https://github.com/Learn-with-Sumit/assignment-1</td>
                                <td className="table-td">100</td>
                            </tr>
                            <tr>
                                <td className="table-td">Assignment 1 - Scoreboard Application</td>
                                <td className="table-td">10 Mar 2023 10:58:13 PM</td>
                                <td className="table-td">Saad Hasan</td>
                                <td className="table-td">https://github.com/Learn-with-Sumit/assignment-1</td>
                                <td className="table-td">100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
