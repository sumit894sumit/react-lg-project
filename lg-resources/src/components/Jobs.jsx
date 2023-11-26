import { IdcardOutlined } from '@ant-design/icons'
import React from 'react'

function Jobs() {
  const Jobs=[
    {id:1,name:"General Labor (Day shift)", type:true},
    {id:2,name:"Warehouse", type:false},
    {id:3,name:"Machinist Swing Shift", type:true},
    {id:4,name:"Lab Technician", type:true},
    {id:5,name:"Sample receiving/Customer service technician", type:true},
    {id:6,name:"Rewind Operator OREM", type:true},
  ]
  return (
    <div>
      <div className="bg-[#8F9AA3] p-5 md:px-20 md:py-16">
        <div className="md:grid grid-cols-12">
          <div className="content col-span-3 flex flex-col justify-between">
            <div className="">
              <h2 className='text-white font-bold text-2xl uppercase' >Featured Job</h2>
            </div>
            <div className="">
              <h2 className='text-white font-bold text-xl uppercase mb-5'>Provo</h2>
              <h2 className='text-white font-bold text-xl uppercase mb-5'>Roy</h2>
              <h2 className='text-white font-bold text-xl uppercase '>West Valley</h2>
            </div>
          </div>
          <div className="cards grid grid-cols-12 gap-7 col-span-9">
          
          {Jobs.map((job)=>(
            <div key={job.id} className="group card col-span-12  md:col-span-6 lg:col-span-4 h-52 bg-[#E3E8ED] p-4 flex justify-between flex-col rounded-2xl hover:bg-[#ef7123] hover:scale-105 ease-in-out duration-500 ">
            <div className="flex justify-between ">
            <div className=" rounded-md">
                <h2 className='bg-white px-3 py-1 rounded-md' >{job.type? "Temp to Full-Time" :"Temp"}</h2>
              </div>
              <div className="bg-white px-3 py-2 rounded-md">
              <IdcardOutlined style={{ fontSize: '24px', color: '#ef7123' }}  />
              </div>
            </div>
            <h2 className='text-lg  group-hover:text-white' >{job.name}</h2>
            </div>
          ))}
          </div>
        </div>
        <hr className=' my-10 md:my-20'  />
        <div className="text-center">
          <button className='border-2 rounded-lg border-white text-white px-5 py-3 hover:border-[#ef7123] hover:bg-[#ef7123] ease-in-out duration-300 ' >Explore All the Job Openings</button>
        </div>
      </div>
    </div>
  )
}

export default Jobs;