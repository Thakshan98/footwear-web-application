import React from 'react'
<<<<<<< HEAD
import { BiSolidPhone } from 'react-icons/bi'
import { GrTechnology } from 'react-icons/gr'
import { SiMediafire } from 'react-icons/si'

const About = () => {
  return (
    <>
      <div
        className='container items-center py- rounded'
        // style={{
        //   backgroundImage: `url('https://e0.pxfuel.com/wallpapers/840/241/desktop-wallpaper-black-dark-background-business-office.jpg')`,
        // }}
      >
        <div className=''>
          <div className=' py-6'>
            <h3 className=' text-5xl font-inter font-semibold text-blue-800'>
              Support Center
            </h3>
            <p className=' leading-1 text-base font-popins tracking-wider py-4'>
              Now that dark mode is a first-class feature of many operating
              systems, it’s becoming more and more common to design a dark
              version of your website to go along with the default design. Now
              that dark mode is a first-class feature of many operating systems.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4 pb-8'>
          <div className='border p-4 rounded leading-2'>
            <h3 className=' text-base font-inter font-semibol'>
              <BiSolidPhone />
              Sales
            </h3>
            <p className=' text-sm font-popins tracking-wider'>
              Now that dark mode is a first-class feature of many operating
              systems, it’s becoming more and more common to design a dark
              version of your website to go along with the default design
            </p>
          </div>
          <div className='border p-4 rounded leading-2'>
            <h3 className=' text-base font-inter font-semibold'>
              <GrTechnology />
              Technical Support
            </h3>
            <p className=' text-sm font-popins tracking-wider'>
              Now that dark mode is a first-class feature of many operating
              systems, it’s becoming more and more common to design a dark
              version of your website to go along with the default design
            </p>
          </div>
          <div className='border p-4 rounded leading-2'>
            <h3 className='text-base font-inter font-semibold'>
              <SiMediafire />
              Media Inquires
            </h3>
            <p className='text-sm font-popins tracking-wider'>
              Now that dark mode is a first-class feature of many operating
              systems, it’s becoming more and more common to design a dark
              version of your website to go along with the default design
            </p>
          </div>
        </div>
      </div>
    </>
=======

const About = () => {
  return (
    <div className='container mx-auto px-3 py-8'>
      <h3 className='text-3xl font-inter font-semibold text-blue-800 text-center py-3'>
        About Us
      </h3>
      <div className='mx-auto px-2 py-8 font-popins text-base text-justify'>
        <p className='text-gray-700 leading-relaxed pb-4'>
          Welcome to our footwear company, where comfort, style, and innovation
          come together. We are passionate about creating high-quality shoes
          that not only look good but also provide utmost comfort for your feet.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8'>
          <div className='border py-8 rounded leading-2 px-2 text-justify'>
            <h3 className='text-base font-inter font-semibold'>3D Model</h3>
            <p className='text-base font-popins tracking-wider'>
              Our journey began with a vision to revolutionize the footwear
              industry. We believe in embracing technology to enhance the
              shoe-buying experience. That's why we have incorporated
              cutting-edge 3D model viewing and AR (Augmented Reality)
              technology into our platform.
            </p>
          </div>
          <div className='border py-8 rounded leading-2 px-2 text-justify'>
            <h3 className='text-base font-inter font-semibold'>
              Augmented Reality
            </h3>
            <p className='text-base font-popins tracking-wider'>
              With our 3D model viewing feature, you can explore our footwear
              collection from every angle, getting a detailed view of the
              design, materials, and craftsmanship. This allows you to make
              informed decisions and choose the perfect pair that matches your
              style and preferences.
            </p>
          </div>
          <div className='border py-8 rounded leading-2 px-2 text-justify'>
            <h3 className='text-base font-inter font-semibold'>
              Augmented Reality con..
            </h3>
            <p className='text-base font-popins tracking-wider'>
              Our AR reality feature takes the shoe-buying experience to a whole
              new level. Using your smartphone or tablet, you can virtually try
              on our shoes in the comfort of your own home. Simply point your
              device's camera towards your feet, and our AR technology will
              superimpose the selected footwear onto your feet, giving you an
              interactive and immersive experience.
            </p>
          </div>
          <div className='border py-8 rounded leading-2 px-2 text-justify '>
            <h3 className='text-base font-inter font-semibold'>3D Model</h3>
            <p className='text-base font-popins tracking-wider'>
              We believe that embracing technology not only enhances the
              shopping experience but also helps you make confident purchasing
              decisions. Our commitment to innovation and customer satisfaction
              drives us to continually explore new possibilities and deliver
              footwear that exceeds your expectations.
            </p>
          </div>
          <div className='border py-8 rounded leading-2 px-2 text-justify '>
            <h3 className='text-base font-inter font-semibold'>Chatbot</h3>
            <p className='text-base font-popins tracking-wider'>
              Our 3D model viewing feature allows you to explore our footwear
              collection from every angle, getting a detailed view of the
              design, materials, and craftsmanship. This helps you make informed
              decisions and choose the perfect pair that matches your style and
              preferences.
            </p>
          </div>
          <div className='border py-8 rounded leading-2 px-2 text-justify '>
            <h3 className='text-base font-inter font-semibold'>Filter</h3>
            <p className='text-base font-popins tracking-wider'>
              Our AR reality feature takes the shoe-buying experience to a whole
              new level. Using your smartphone or tablet, you can virtually try
              on our shoes in the comfort of your own home. Simply point your
              device's camera towards your feet, and our AR technology will
              superimpose the selected footwear onto your feet, giving you an
              interactive and immersive experience.
            </p>
          </div>
        </div>
        <p className='text-gray-700  mx-auto leading-relaxed mt-4'>
          Thank you for choosing our footwear. We are excited to provide you
          with a seamless blend of style, comfort, and technological
          advancements. Step into the future of footwear with us and experience
          the difference.
        </p>
      </div>
    </div>
>>>>>>> 4187e9d267e58b30ccfa296ccfdada1dd0bb9716
  )
}

export default About
