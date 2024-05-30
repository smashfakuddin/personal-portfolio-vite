import { useEffect, useState } from 'react';
import Typewriter from "typewriter-effect";

const Hero = () => {

  return (
    <section className="">
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-2xl mb-8 flex">
          I am
          <span className='ml-2'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('S. M. Ashfak Uddin')
                  .pauseFor(300)
                  .deleteChars(20)
                  .typeString('Web Developer')
                  .pauseFor(300)
                  .deleteChars(20)
                  .typeString(' React Developer')
                  .pauseFor(1000)
                  .start();
              }}
            />
          </span>
        </p>
        <a href="#projects" className="px-6 py-3 bg-white text-purple-600 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          View My Work
        </a>
      </div>
    </section>
  )
}

export default Hero