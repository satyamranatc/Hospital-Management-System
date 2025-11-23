import React from 'react'
import { Building2, Target, Zap, Users, Heart } from 'lucide-react'

const About = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
            About <span className='bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent'>Us</span>
          </h1>
          <p className='text-gray-600 text-lg'>Learn more about our mission and values</p>
        </div>

        {/* Main Content */}
        <div className='mb-20 flex flex-col md:flex-row gap-12 items-center'>
          <div className='w-full md:w-1/2 lg:w-2/5'>
            <div className='relative w-full h-[400px] bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden'>
              <div className='absolute inset-0 bg-white/10 backdrop-blur-sm'></div>
              <Building2 className='w-32 h-32 text-white relative z-10' strokeWidth={1.5} />
            </div>
          </div>
          
          <div className='flex flex-col justify-center gap-6 md:w-1/2 lg:w-3/5 text-gray-600'>
            <p className='text-lg leading-relaxed'>
              Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
            </p>
            <p className='text-lg leading-relaxed'>
              Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
            </p>
            <div className='mt-4'>
              <h3 className='text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2'>
                <Target className='w-6 h-6 text-teal-600' />
                Our Vision
              </h3>
              <p className='text-lg leading-relaxed'>
                Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className='mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12'>
            Why <span className='bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent'>Choose Us</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='group bg-white border-2 border-gray-200 px-8 py-10 rounded-2xl hover:border-transparent hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-600 transition-all duration-300 text-gray-600 hover:text-white cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-2'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='p-3 bg-blue-100 group-hover:bg-white/20 rounded-xl transition-colors'>
                  <Zap className='w-6 h-6 text-blue-600 group-hover:text-white' />
                </div>
                <h3 className='text-xl font-bold'>Efficiency</h3>
              </div>
              <p className='text-base leading-relaxed'>
                Streamlined appointment scheduling that fits into your busy lifestyle.
              </p>
            </div>

            <div className='group bg-white border-2 border-gray-200 px-8 py-10 rounded-2xl hover:border-transparent hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-600 transition-all duration-300 text-gray-600 hover:text-white cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-2'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='p-3 bg-teal-100 group-hover:bg-white/20 rounded-xl transition-colors'>
                  <Users className='w-6 h-6 text-teal-600 group-hover:text-white' />
                </div>
                <h3 className='text-xl font-bold'>Convenience</h3>
              </div>
              <p className='text-base leading-relaxed'>
                Access to a network of trusted healthcare professionals in your area.
              </p>
            </div>

            <div className='group bg-white border-2 border-gray-200 px-8 py-10 rounded-2xl hover:border-transparent hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-600 transition-all duration-300 text-gray-600 hover:text-white cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-2'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='p-3 bg-purple-100 group-hover:bg-white/20 rounded-xl transition-colors'>
                  <Heart className='w-6 h-6 text-purple-600 group-hover:text-white' />
                </div>
                <h3 className='text-xl font-bold'>Personalization</h3>
              </div>
              <p className='text-base leading-relaxed'>
                Tailored recommendations and reminders to help you stay on top of your health.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className='mt-16 text-center'>
          <div className='inline-block bg-white px-8 py-4 rounded-2xl shadow-lg border border-gray-200'>
            <p className='text-gray-600 mb-2'>Get in touch with us</p>
            <a href='mailto:aasthaedu@example.com' className='text-xl font-semibold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent hover:underline'>
              aasthaedu
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About