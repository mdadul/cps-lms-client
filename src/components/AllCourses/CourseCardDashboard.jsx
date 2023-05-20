import React from 'react'
import Layout from '../common/Layout'

export default function CourseCardDashboard() {
    return (
        <Layout> 
        <div class="card">
            <img src="https://placeholdit.imgix.net/~http://localhost:3000/?txtsize=33&txt=Course%20Image&w=300&h=150" alt="Course Image"/>
                <div class="card-body">
                    <h5 class="card-title">Course Title</h5>
                    <p class="card-text">Course Description</p>
                    <a href="/courses/course-id" class="card-link">View Course</a>
                </div>
        </div>
        </Layout>
    )
}
