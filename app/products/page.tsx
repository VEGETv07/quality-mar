import React from 'react'
import OurProducts from './_components/OurProducts'
import Images from './_components/Images'

export default function Products() {
  return (
    <div className='grid grid-cols-1 gap-20 p-20'>
      <OurProducts/>
      <Images/>
      </div>
  )
}
