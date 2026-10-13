import { Mail } from 'lucide-react'
import React from 'react'

const DirectContact = () => {
  return (
    <div className='bg-[#F7F2E8]'>
        <div className='container m-auto py-10 gap-5 grid grid-cols-3'>
            <div className=' p-3 flex flex-col border-[0.5px] border-gray-100  items-center  m-auto w-full h-full shadow-lg'>
                <div className='border rounded-full border-orange-500 p-4 mb-4'><Mail className='text-orange-500' size={30} strokeWidth={1} /></div>
                <h3 className='font-semibold text-xl tracking-[5px]'>Phone</h3>
                <p><a className='hover:text-orange-500 ' href="http://" target="_blank" rel="">+92-xxxxxxxxx</a></p>
            </div>
            <div className=' p-3 flex flex-col border-[0.5px] border-gray-100  items-center  m-auto w-full h-full shadow-lg'>
                <div className='border rounded-full border-orange-500 p-4 mb-4'><Mail className='text-orange-500' size={30} strokeWidth={1} /></div>
                <h3 className='font-semibold text-xl tracking-[5px]'>Phone</h3>
                <p><a className='hover:text-orange-500 ' href="http://" target="_blank" rel="">+92-xxxxxxxxx</a></p>
            </div>
            <div className=' p-3 flex flex-col border-[0.5px] border-gray-100  items-center  m-auto w-full h-full shadow-lg'>
                <div className='border rounded-full border-orange-500 p-4 mb-4'><Mail className='text-orange-500' size={30} strokeWidth={1} /></div>
                <h3 className='font-semibold text-xl tracking-[5px]'>Phone</h3>
                <p><a className='hover:text-orange-500 ' href="http://" target="_blank" rel="">+92-xxxxxxxxx</a></p>
            </div>
           
        </div>
    </div>
  )
}

export default DirectContact