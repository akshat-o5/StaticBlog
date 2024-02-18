import React from 'react';
import Posts from './Components/Posts';

function Home() {
  return (
    <main className="flex flex-col items-center h-screen">
      <h1 className="text-center text-3xl my-4">
        Hi{" "}. Welcome to my Blogs.
        <span role="img" aria-label="Waving Hand">
          👋
        </span>
      </h1>
      <Posts/>
    </main>
  );
}

export default Home;
