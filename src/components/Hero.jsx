import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Hero = () => {

  return (
    <>
      <section class=" dark:bg-gray-900 px-10" id="home" >
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
              Hey There, It's
              <span className='ml-2 text-cyan-400'>
                <Typewriter
                  options={{
                    strings: ['S. M. Ashfak Uddin', 'Web Developer', 'React Developer', 'Shopify Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              A passionate Shopify Developer with one year of hands-on experience in creating and optimizing Shopify stores. My journey into web development began with a curiosity about how websites are built and a desire to create seamless, user-friendly online shopping experiences. Over the past year, I have honed my skills in Shopify's ecosystem, becoming proficient in both front-end and back-end development.
            </p>
            <div className=" text-2xl">
              <ul className='flex'>
                <li className='mr-3'> <a href="https://www.linkedin.com/in/smashfakuddin/" target="_blank"><FaLinkedin /></a></li>
                <li className='mr-3'> <a href="https://github.com/smashfakuddin" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
                <li className='mr-3'> <FaFacebook /></li>
              </ul>
            </div>
            <a href="#" class=" mt-10 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-200 border border-gray-300 rounded-lg hover:bg-gray-100  hover:text-black focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Download CV
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Contact Me
              <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
          </div>
        </div>
      </section>

    </>
  )
}

export default Hero