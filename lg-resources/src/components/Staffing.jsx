import React from 'react'

function Staffing() {
    const items=[
        {id:1,number:20000,disc:"Employees Placed"},
        {id:2,number:2000,disc:"Local Business Partners in the Last Decade"},
        {id:3,number:175,disc:"Currently Active Companies"},
        {id:4,number:250,disc:"Positions Filled"},
    ]
  return (
    <div>
        <div className="bg-[#173649] p-4 md:p-20">
<div className=" mx-auto text-center w-6/12 ">
            <h2 className='text-white font-bold text-4xl mb-5' >Our Numbers Speak For Themselves</h2>
            <p className=' text-white text-lg ' >We have helped thousands of companies fill their strategic staffing needs and save money while doing it.</p>
</div>
<div className="grid sm:grid-cols-2 md:grid-cols-4  gap-5   mt-16">
{items.map((item)=>(
    <div className="  card  col-span-1  md:col-span-2 lg:col-span-1   bg-white p-5   md:px-14 md:py-10 rounded-2xl h-44 flex flex-col justify-between text-center">
        <h2 className='text-[#ef7123] font-bold text-2xl' >{item.number}</h2>
        <p className='text-xl' >{item.disc}</p>
    </div>
))}
</div>
        </div>
    </div>
  )
}

export default Staffing;