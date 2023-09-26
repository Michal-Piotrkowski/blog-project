import React from 'react'
import { InfoWidget, PostWidget} from '@/components'

const SidePanel = () => {
  return (
    <div className='sticky 2xl:top-28 xl:top-24 right-0 2xl:h-[790px] xl:h-[690px] lg:h-[790px] md:h-[790px] 2xl:mb-16 xl:mb-14 lg:mb-16 md:mb-14 2xl:col-span-2 xl:col-span-2 lg:col-span-1 md:col-span-1'>
        <PostWidget />
        <InfoWidget />
    </div>
  )
}

export default SidePanel