import React, { useState } from "react"

const Quiz = () => {
  const [answered, setAnswered] = useState()

  const steps = {
    title: "Do you consider yourself a hydrated person?",
    options: [{ title: "Yes, very." }, { title: "No, I'm thirsty." }],
  }

  return (
    <div className="p-8 bg-teal-700 rounded-lg text-white text-center">
      {answered ? (
        <form name="home-quiz" netlify>
          <h1 className="text-2xl mb-4">Great Job!</h1>
          <input
            className="rounded-l px-3 py-1 text-xl text-black"
            type="email"
            placeholder="Email Address"
            name="email"
          />
          <input type="hidden" value={answered} name="answer" />
          <button
            className="bg-teal-900 text-xl py-1 px-3 rounded-r"
            type="submit"
          >
            Submit
          </button>
        </form>
      ) : (
        <>
          <h3 className="text-lg mb-4">{steps.title}</h3>
          {steps.options.map(option => (
            <button
              className="bg-teal-900 px-4 py-2 mx-4 rounded-lg text-lg hover:bg-teal-600"
              onClick={() => setAnswered(option.title)}
            >
              {option.title}
            </button>
          ))}
        </>
      )}
    </div>
  )
}

export default Quiz
