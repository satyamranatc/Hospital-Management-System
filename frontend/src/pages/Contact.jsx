import React from 'react'
import { Phone, MapPin, Mail, Briefcase, Clock, Building2 } from 'lucide-react'

const Contact = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
            Contact <span className='bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent'>Us</span>
          </h1>
          <p className='text-gray-600 text-lg'>Get in touch with our team</p>
        </div>

        {/* Main Content */}
        <div className='mb-20 flex flex-col md:flex-row gap-12 items-center'>
          {/* Contact Image/Icon */}
          <div className='w-full md:w-1/2 lg:w-2/5'>
            <div className='relative w-full h-[400px] bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden'>
              <div className='absolute inset-0 bg-white/10 backdrop-blur-sm'></div>
              <Phone className='w-32 h-32 text-white relative z-10' strokeWidth={1.5} />
              
              {/* Decorative circles */}
              <div className='absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl'></div>
              <div className='absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl'></div>
            </div>
          </div>

          {/* Contact Information */}
          <div className='flex flex-col justify-center gap-8 md:w-1/2 lg:w-3/5'>
            {/* Office Section */}
            <div>
              <h2 className='text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3'>
                <Building2 className='w-8 h-8 text-teal-600' />
                Our Office
              </h2>
              
              <div className='space-y-4'>
                <div className='flex items-start gap-3 text-gray-600'>
                  <MapPin className='w-6 h-6 text-blue-600 flex-shrink-0 mt-1' />
                  <p className='text-lg leading-relaxed'>
                    Prescripto Near D. Y. Patil Institute of Technology<br />
                    Pune, Maharashtra<br />
                    India
                  </p>
                </div>

                <div className='flex items-start gap-3 text-gray-600'>
                  <Phone className='w-6 h-6 text-teal-600 flex-shrink-0 mt-1' />
                  <p className='text-lg'>Tel: +91 (020) 1234-5678</p>
                </div>

                <div className='flex items-start gap-3 text-gray-600'>
                  <Mail className='w-6 h-6 text-purple-600 flex-shrink-0 mt-1' />
                  <p className='text-lg'>Email: aasthaedu.1904@gmail.com</p>
                </div>

                <div className='flex items-start gap-3 text-gray-600'>
                  <Clock className='w-6 h-6 text-green-600 flex-shrink-0 mt-1' />
                  <p className='text-lg'>
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Careers Section */}
            <div className='mt-8 pt-8 border-t-2 border-gray-200'>
              <h3 className='text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3'>
                <Briefcase className='w-7 h-7 text-blue-600' />
                Careers at Prescripto
              </h3>
              <p className='text-gray-600 text-lg mb-6 leading-relaxed'>
                Learn more about our teams and job openings.
              </p>
              <button className='group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl text-base font-semibold flex items-center gap-2 hover:-translate-y-0.5'>
                Explore Jobs
                <Briefcase className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-16'>
          <div className='bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-xl'>
            <div className='bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4'>
              <Phone className='w-7 h-7 text-blue-600' />
            </div>
            <h4 className='text-xl font-bold text-gray-800 mb-2'>Phone Support</h4>
            <p className='text-gray-600'>Available Mon-Sat</p>
            <p className='text-blue-600 font-semibold mt-2'>+91 (020) 1234-5678</p>
          </div>

          <div className='bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-200 hover:border-teal-300 transition-all hover:shadow-xl'>
            <div className='bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4'>
              <Mail className='w-7 h-7 text-teal-600' />
            </div>
            <h4 className='text-xl font-bold text-gray-800 mb-2'>Email Us</h4>
            <p className='text-gray-600'>Response within 24 hours</p>
            <p className='text-teal-600 font-semibold mt-2'>aasthaedu.1904@gmail.com</p>
          </div>

          <div className='bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-200 hover:border-purple-300 transition-all hover:shadow-xl'>
            <div className='bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4'>
              <MapPin className='w-7 h-7 text-purple-600' />
            </div>
            <h4 className='text-xl font-bold text-gray-800 mb-2'>Visit Us</h4>
            <p className='text-gray-600'>Pune, Maharashtra</p>
            <p className='text-purple-600 font-semibold mt-2'>India</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact