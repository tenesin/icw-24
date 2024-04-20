import Image from "next/image";
import Link from "next/link";
import {Button} from "@nextui-org/react";


export default function Home() {
  return (
    <>
    <div className="h-screen bg-[#F5FEDF]">
<section className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
    <div className="w-full h-128 lg:w-1/2 lg:h-auto">
        <Image src="/Assets/Logo/logo-icw.png"
      width={600}
      height={600}
      alt="logo icw"
      />
    </div>
    <div
        className="max-w-lg bg-[#FBE996] md:max-w-2xl md:z-10 md:shadow-lg md:absolute rounded-xl md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        
        <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-semibold uppercase text-green-800 lg:text-4xl">Indonesian Corrosion Week 2024</h2>
            <p className="mt-4">
            ICW (Indonesian Corrosion Week) 2024, is one of the events that raises the issue of corrosion. ICW is present as t the frontline to broaden the window of insight and create awareness, especially for the younger generation, about the importance of preventing corrosion. 

            </p>
            <p className="mt-4">
            ICW is an annual event of INDOCOR ITS SC which is held to provide introduction, development, and innovation of corrosion on a national scale for students and college students in Indonesia through talkshow, company visit, ICW Night, also several competitions held such as essay, poster, and corrosion handling.
            </p>
        </div>
    </div>
</section>
</div>

<section className="text-[#fff] h-128 bg-[#6A211F] body-font">
  <div className="container px-6 pt-64 pb-2 sm:py-64  md:py-6 mx-auto">
   <h1 className="text-center items-center align-middle m-8 text-5xl font-semibold">Competition</h1>
    <div className="flex flex-wrap -m-4 mb-6 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-[#fff] px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-[#fff]">Essay for Student</h2>
          <Button href="/" className="mt-4 " color="success">
        Read More
      </Button> 
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-[#fff] px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-[#fff]">Essay for College</h2>
          <Button href="/" className="mt-4 " color="success">
        Read More
      </Button> 
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-[#fff] px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-[#fff]">Handling Competition</h2>
          <Button href="/" className="mt-4 " color="success">
        Read More
      </Button> 
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-[#fff] px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-[#fff]">Poster Competition</h2>
          <Button href="/" className="mt-4 " color="success">
        Read More
      </Button> 
        </div>
      </div>
    </div>
  </div>
</section>
</>
  );
}
