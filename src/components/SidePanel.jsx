import React from 'react'
import { InfoWidget, PostWidget} from '@/components'

const SidePanel = () => {
  return (
    <div className='sticky top-16 right-0 col-span-2 h-[790px] mb-16'>
        <PostWidget />
        <InfoWidget />
    </div>
  )
}

export default SidePanel