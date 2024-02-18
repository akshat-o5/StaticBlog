import Image from 'next/image'
import React from 'react'

function MyProfilePic() {
  return (
    <section className='w-full mx-auto'>
        <Image className='border-4 border-black dark:border-slate-500 drp-shadow-xl shadow-black rounded-full mx-auto mt-8'
        src='/myself.jpg'
        width={200}
        height={200}
        alt='Akshat'
        priority={true}
        />
    </section>
  )
}

export default MyProfilePic