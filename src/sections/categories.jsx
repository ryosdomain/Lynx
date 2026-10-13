import React from 'react'
import CategoryCard from '../components/categoryCard'

const categories = () => {
  return (
    
    <div className='container m-auto py-10 pt-20'>
        <div className='w-1/2'>
             <h2 className="text-orange-500 font-bold uppercase tracking-[5px]">EVERYTHING YOUR Style NEEDS</h2>
            <h1 className="text-black text-7xl font-black uppercase">
            ONE place. SIX ESSENTIAL COLLECTIONS.
          </h1>
        </div>
        <div className='grid grid-cols-5 gap-4 mt-10'>
            <CategoryCard></CategoryCard>
            <CategoryCard></CategoryCard>
            <CategoryCard></CategoryCard>
            <CategoryCard></CategoryCard>
            <CategoryCard></CategoryCard>
            
            
        </div>
    </div>
  )
}

export default categories