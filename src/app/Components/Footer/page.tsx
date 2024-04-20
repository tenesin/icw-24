import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Footer() {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">
    <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <Link className="hover:text-gray-900" href="/">Home</Link>
        <Link className="hover:text-gray-900" href="#competition">Competition</Link>
        <Link className="hover:text-gray-900" href="/talkshow">Talk Show</Link>
        <Link className="hover:text-gray-900" href="/talkshow">Company Visit</Link>
        <Link className="hover:text-gray-900" href="/icwnight">ICW Night</Link>
        
    </nav>

    <div className="flex justify-center space-x-5">
        <Link href="https://instagram.com/icw.2024
" target='_blank'><Image
        src="/Assets/Logo/instagram.png"
        width={30}
        height={30}
        alt="Picture of the author"/></Link>
        <Link href="https://www.linkedin.com/company/indonesian-corrosion-week/" target='_blank'><Image
        src="/Assets/Logo/linkedin.png"
        width={30}
        height={30}
        alt="Picture of the author"/></Link>
        <Link href="https://tiktok.com/icw.24" target='_blank'><Image
        src="/Assets/Logo/tiktok.png"
        width={30}
        height={30}
        alt="Picture of the author"/></Link>
    </div>
    <p className="text-center text-gray-700 font-medium">&copy; Web Developer INDOCOR 2024 All Rights reserved</p>
</footer>
  )
  
}
