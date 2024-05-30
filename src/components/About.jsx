
const About = () => {
  return (
    <div className="container mx-auto py-16 px-10 " id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" // Replace with your image path
            alt="About Me"
            className="w-full h-auto max-w-sm rounded-lg shadow-md"
          />
        </div>
        
        {/* Right Column: Detailed Paragraph */}
        <div className="text-gray-400">
          <h2 className="text-3xl font-bold text-gray-400 mb-4">About Me</h2>
          <p>
            Hello! I'm a passionate Shopify developer with one year of experience in creating and customizing e-commerce solutions.
            My journey in web development began with a deep interest in technology and a desire to help businesses grow online.
            Over the past year, I've worked on a variety of Shopify projects, from theme integration to custom app development,
            helping clients achieve their goals with tailored solutions.
          </p>
          <p className="mt-4">
            My approach is always client-centric, focusing on understanding your specific needs and delivering a product that not only meets but exceeds your expectations.
            I'm committed to continuous learning and staying updated with the latest trends and best practices in Shopify development.
            Let's work together to bring your e-commerce vision to life!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About