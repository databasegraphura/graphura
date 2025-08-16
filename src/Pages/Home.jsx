import React from 'react'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='flex flex-col bg-violet-600'>
      {/* Banner */}
      <div className='h-screen w-full'>
        <video
          className="w-full h-full object-cover"
          // src="https://v.pinimg.com/videos/mc/720p/2e/0a/2e0a1e2e6e8d8b7e6e7e6e8e6e8e6e8e.mp4"
          src='https://www.w3schools.com/html/mov_bbb.mp4'
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Content Section */}
      <div className='h-screen w-full flex flex-col items-center justify-center text-white px-40 py-4 gap-6'>
        <h1 className='text-5xl font-bold text-[#d7aeff]'>Graphura India Private Limited</h1>
        <p className='text-gray-200 leading-relaxed text-lg'>Your creative genie in the world of digital expression. Here, we don’t just offer services We customize your wishes into visual reality with imagination, intent, and impact. Whether it’s a brand that needs a voice, a story that deserves to be told, or a message waiting to shine. We're here to bring it all to life with artistry and precision. From pixels that speak to strategies that spark, we blend bold creativity with strategic brilliance. Every project we touch becomes a canvas, every brief a new spell. So tell us -what’s your next wish? Because at Graphura, your vision is our command, and magic is always in the making.</p>
      </div>

      {/* Footer */}
      <div className='mt-8'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
