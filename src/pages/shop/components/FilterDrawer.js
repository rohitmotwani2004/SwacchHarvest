import { Sliders } from '@phosphor-icons/react'
import React from 'react'

export const FilterDrawer = () => {
  return (
    <button className='border border-primary-800 px-5 rounded-lg items-center mt-2 ms-2 py-2 flex flex-row text-lg'>  
    <Sliders className='mx-2'/>
      Filter
    </button> 
  )
}
