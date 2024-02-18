import Link from 'next/link'
import React from 'react'
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Navbar() {
    return (
        <nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
            <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
                <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
                    <Link href='/' className='text-white/90 no-underline hover:text-white'>Akshat&apos;s Blogs
                    </Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-2xl">
                    <Link className="text-white/90 hover:text-white" href="mailto:a.akshat9032@gmail.com">
                        <SiGmail />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://github.com/akshat-o5">
                        <FaGithub />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://www.linkedin.com/in/akshat-gupta-4414ab22a/">
                        <FaLinkedin />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

