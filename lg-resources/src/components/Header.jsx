import React, { useState } from 'react'
import { Dropdown, Space } from 'antd'
import { CloseOutlined, DownOutlined, MenuOutlined } from '@ant-design/icons';
import FormModal from './FormModal';
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
      Jobs X
       </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
    Jobs Y
      </a>
    ),
    disabled: false,
  },
 
];
 
function Header() {
  const [showMenu,setShowMenu]=useState(false);
  const [clicked,setClicked]=useState(false);
  return (
    <div>
        <div className="header-top bg-[#1f3547] p-3   ">
         <div className="m-auto md:grid md:grid-cols-6 w-fit">
       <div className="bg-[#4C5D6C] rounded-md p-1 px-3 col-start-1 col-end-3 flex  ">
                <p className='text-white text-sm md:text-base whitespace-nowrap'>LG Resources offers Customized Staffing - </p>
                <a className='text-white text-sm md:text-base underline whitespace-nowrap' href="#" rel='noopener'> Get Started Now</a>
            </div>
            <div className="flex justify-between col-end-8 col-span-2 items-center ">
                <p className='text-white text-sm  ' >Privacy Policy</p>
                <p className='text-white text-sm  ' >Contact</p>
               
            </div>
       </div>
        </div>
 
        <div className="bg-white flex justify-between p-6 w-full m-auto relative ">
          <div className="logo-container ">
            <img src={'https://jobs.lgresources.com/hubfs/logo.svg'} alt="" />
          </div>
          <div className={`${showMenu ? 'hidden' :'block'} absolute top-[75px] left-0 bg-[white] w-full h-[76vh] no-tailwind`}>
            <ul className='flex flex-col  justify-center items-center [&>li]:border-b-2 [&>li]:py-4 [&>li]:pl-5 [&>li]:w-full no-tailwind md:flex md:flex-row md:list-none md:[&>li]:py-1 md:gap-x-8 md:whitespace-nowrap md:[&>li]:border-0'>
              <li className=''>Work for LG</li>
              <li className=''>
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                  Jobs
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              </li>
              <li className=''>
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                  Location
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              </li>
             <li className=''>Blog</li>
            </ul>
         
          </div>
          <div className="flex gap-4">
          <div onClick={()=>setShowMenu(!showMenu)} className="block md:hidden">
            {showMenu? <MenuOutlined style={{fontSize:'32px'}} />:<CloseOutlined style={{fontSize:'32px'}}/>}
            </div>
            <button className='bg-[#ef7123] rounded-lg text-white  px-5 py-1' onClick={()=>setClicked(!clicked)}>Apply for a job</button>
          </div>
        </div>
        <FormModal clicked={clicked}/>
    </div>
  )
}
 
export default Header;