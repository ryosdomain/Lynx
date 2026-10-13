import React from 'react'

const ProductCard = () => {
  return (
    <div>
        <div className='border border-gray-300 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl'> 
            <div className='h-120 relative'>
                <img className='absolute w-full h-full object-cover object-center' src="https://images.pexels.com/photos/39967132/pexels-photo-39967132.jpeg" alt="" />
                <div className='bg-black text-white absolute z-1 px-3 py-1 top-3 left-3 uppercase text-sm font-bold'>best seller</div>
            </div>
            <div className='bg-white p-4'>
                <h3 className='text-orange-500 font-bold mb-2 uppercase'>Women's Collection</h3>
                <h4 className='text-xl'>Product title </h4>
                <p className='line-clamp-1 text-sm'>product description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur in explicabo eius!</p>
                <div className='mt-8 flex justify-between '>
                    <div className='font-bold text-lg'>

                        $999 <sub className='line-through font-normal text-xs'>$1500</sub> 
                    </div>
                    <div>
                        <button className='bg-orange-500 py-2 px-3 font-bold uppercase text-[11px] text-white cursor-pointer '>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard