import { Carousel } from 'antd'
import React from 'react'

function Hero() {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

  return (
    <div className='bg-[#1F3547] md:p-10 lg:p-20' >

        <div className="max-w-xs sm:max-w-sm md:max-w-4xl lg:max-w-7xl  m-auto md:flex justify-between items-center px-2 py-2 md:py-10 relative">
           <div className="text-content max-w-[180px]  md:max-w-[450px]">
            <h2 className="text-white font-bold text-3xl md:text-6xl mr-5">Looking For a New  Career  Opportunity? We  Can Help.</h2>
           </div>
           {/* <div className="bg-[url(https://i.ibb.co/XXVrhmG/image1.png)] w-full -ml-10 bg-no-repeat"> */}

        <div className="image1 hidden md:block  absolute  ">
        </div>
        <div className='carousel max-w-[300px]'>
           <Carousel>
                    <div   className="bg-[#E3E8ED] p-3 md:p-8     rounded-xl ">
                        <p className='w-full  md:text-lg md:w-64 md:h-[270px] overflow-x-hidden' >“I have been with LG for 5 years and the opportunities for growth are here. You are tested every day on how badly you want success. LG and all the people here have helped me build myself and my performance. The diversity that we see every day makes us relate to people and makes our work environment stronger.”</p>
                        <p className='text-lg font-bold' >- Lupe</p>
                    </div>
                    <div  className="bg-[#E3E8ED] p-3 md:p-8     rounded-xl  ">
                        <p className='w-full  md:text-lg md:w-64 md:h-[270px] overflow-x-hidden' >“I am very grateful to LG for the opportunity it gave me. A former LG worker saw potential in me when I was working in a warehouse and offered me the opportunity to interview to work with LG as a recruiter. I started working and a few months later I was promoted to manager. I had no experience but LG helped me and gave me the necessary resources to improve my skills and grow as a person in my professional field.”</p>
                        <p className='text-lg font-bold' >- Yizalie</p>
                    </div>
                    <div  className="bg-[#E3E8ED] p-3 md:p-8     rounded-xl  ">
                        <p className='w-full  md:text-lg md:w-64 md:h-[270px] overflow-x-hidden' >“LG has improved my life drastically in the last 3 years. I started out as a temp through the agency and eventually got offered to come work in the office as a recruiter. Now I'm managing the office. The opportunity in the company is huge for whoever wants it. Working for LG has helped me improve my personal and my professional life.”</p>
                        <p className='text-lg font-bold' >- Maynard R.</p>
                    </div>
             
           </Carousel>
        
           {/* </div> */}
           </div>
        </div>
    </div>
  )
}

export default Hero