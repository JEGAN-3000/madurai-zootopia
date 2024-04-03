import React from 'react'
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <>   
      <div className="aboutPage" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">
        <div className="aboutContent flex justify-center flex-col   ">
          <div>
            <h1 className="lobster tracking-widest md:text-[50px] text-center pt-5 text-4xl sm:text-center sm:pt-5">WELCOME TO MADURAI ZOOLOGICAL PARK</h1>
          </div>
          <div className='p-2 history'>
            <h5 className='history delius md:w-[700px] text-justify p-2 bg-teal-700 mx-auto md:text-[30px] sm:bg-slate-900 sm:bg-opacity-50'>
              Madurai Zootopia Park was the first Zoo established in the Madurai
              in 1855. It is one of the largest Zoos in Southeast Asia,
              spreading across 602 hectares of land. It is one of the most
              modern and scientifically managed Zoos in the country and it is
              rated as the "Best Zoo" in the country with a top score of 82% in
              the first Management Effectiveness Evaluation conducted by the
              Central Zoo Authority, MOEF & CC. The park works with the mission
              of conservation breeding of rare and endangered animals,
              veterinary care & conservation education.
            </h5>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About