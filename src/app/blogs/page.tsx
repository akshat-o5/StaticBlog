import React from 'react'
import Posts from '../Components/Posts'

function page() {
  return (
    <>
    <div className="flex flex-col items-center h-screen">
        <h1 className="text-center text-3xl my-4">
        Hi{" "}. This is Akshat Gupta.
        <span role="img" aria-label="Waving Hand">
          👋
        </span>
      </h1>
      <Posts/>
    </div>
    </>
  )
}

export default page