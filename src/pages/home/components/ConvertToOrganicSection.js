import React from 'react'
import { ConsumerPreferenceAreaChart, EnvironmentalImpactChart, FarmersConvertedChart, NutritionalValueChart, PricePremiumChart } from '../..'

export const ConvertToOrganicSection = () => {
  return (
    <div className='p-2 m-3'>
        <h2 className="m-3 text-center text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl">Why Embrace <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r to-primary-800 from-primary-400">Organic Farming?</span> </h2>
        <p className="text-lg text-center font-normal mb-5 text-gray-600 lg:text-2xl dark:text-gray-400">Essential Reasons for Transitioning</p>
        <PricePremiumChart/>
        <FarmersConvertedChart/>
        <ConsumerPreferenceAreaChart/>
        <NutritionalValueChart/>
        <EnvironmentalImpactChart/>
    </div>
  )
}
