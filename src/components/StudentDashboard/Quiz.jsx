import React from 'react'
import Nav from './Nav'

export default function Quiz() {
  return (
    <div className='bg-gradient-to-r from-teal-900 to-gray-600'>
        <Nav />
  <section className="py-6 bg-primary">
    <div className="mx-auto max-w-7xl px-5 lg:px-0">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Quizzes for "Debounce Function in JavaScript - JavaScript Job Interview question"
        </h1>
        <p className="text-sm text-slate-200">Each question contains 5 Mark</p>
      </div>
      <div className="space-y-8 ">
        <div className="quiz">
          <h4 className="question">Quiz 1 - What is a Debounce function in JavaScript?</h4>
          <form className="quizOptions">
            
            <label for="option1_q1">
              <input type="checkbox" id="option1_q1" />
              A function that is called after a certain time interval
            </label>
            
            <label for="option2_q1">
              <input type="checkbox" id="option2_q1" />
              A function that is called after a certain time interval
            </label>
            
            <label for="option3_q1">
              <input type="checkbox" id="option3_q1" />
              A function that is called after a certain time interval
            </label>
            
            <label for="option4_q1">
              <input type="checkbox" id="option4_q1" />
              A function that is called after a certain time interval
            </label>
          </form>
        </div>
        <div className="quiz">
          <h4 className="question">Quiz 2 - Which of the following is an example of a situation where you would use the
            Debounce function?</h4>
          <form className="quizOptions">
            
            <label for="option1_q2">
              <input type="checkbox" id="option1_q2" />
              A search bar where the results are displayed as you type.
            </label>
            
            <label for="option2_q2">
              <input type="checkbox" id="option2_q2" />
              A button that performs an action when clicked.
            </label>
            
            <label for="option3_q2">
              <input type="checkbox" id="option3_q2" />
              An animation that plays when a user hovers over an element.
            </label>
            
            <label for="option4_q2">
              <input type="checkbox" id="option4_q2" />
              All of the above.
            </label>
          </form>
        </div>
      </div>
      <button
        className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">Submit</button>
    </div>
  </section>
    </div>
  )
}
