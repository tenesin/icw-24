"use client"

import { useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const competitions = [
  {
    title: "Essay for College",
    imageSrc: "/Assets/Poster/Poster-Essay-Mahasiswa.png",
    infoLinkMore: "https://intip.in/KEBUTUHANPESERTAESSAYICW2024",
    infoLinkRegis:"https://intip.in/REGISTRASIESSAYMAHASISWAICW2024",
    description:"Essay Competition is a facility for ideas, innovations, and ideas related to the prevention, handling, and knowledge of corrosion for S1 / D4 students throughout Indonesia as outlined in the form of an essay. This competition consists of two stages, namely the essay collection stage and the final stage."
  },
  {
    title: "Essay for Student",
    imageSrc: "/Assets/Poster/Poster-Essay-siswa.png",
    infoLinkMore: "https://intip.in/KEBUTUHANPESERTAESSAYICW2024",
    infoLinkRegis:"https://intip.in/REGISTRASIESSAYSISWACW2024",
    description:"Essay Competition is a facility for ideas, innovations, and ideas related to the prevention, handling, and knowledge of corrosion for high school / vocational high school students throughout Indonesia as outlined in the form of an essay. This competition consists of two stages, namely the essay collection stage and the final stage."
  },
  {
    title: "Handling Competition",
    imageSrc: "/Assets/Poster/Poster-CHC.jpg",
    infoLinkMore: "https://intip.in/KEBUTUHANPESERTACHC2024",
    infoLinkRegis:"https://intip.in/REGISTRASICHCICW2024",
    description:"Corrosion Handling Competition is a competition where S1 / D4 students from all over Indonesia are challenged to complete case studies related to corrosion and failures that occur in the industrial sector. The completion of this case study will be in the form of papers and videos. This competition provides an opportunity for participants to participate in providing solutions and innovations related to actual problems that occur in the industrial sector."
  },
  {
    title: "Poster Competition",
    imageSrc: "/Assets/Poster/Poster-Poster-Competition.png",
    infoLinkMore: "https://intip.in/KEBUTUHANPESERTAPOSTERICW2024",
    infoLinkRegis:"https://intip.in/REGISTRASILOMBAPOSTERMAHASISWAICW2024",
    description:"Poster Competition is a competition to express knowledge/ideas/solutions about corrosion which is conveyed through attractive infographics. This competition is aimed for S1/D4 students all over Indonesia. This year's theme is“ Continuous corrosion, which leads to the innovation of corrosion policy for today and the future ”."
  },
];

export default function CompCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === competitions.length - 1 ? 0 : prevIndex + 1));
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? competitions.length - 1 : prevIndex - 1));
  };
  
  return (
    <div className="bg-orange-200 container flex justify-center items-center h-[750px] sm:h-[700px] lg:h-[600px]">
      <div className="bg-yellow-200 overflow-hidden rounded-lg shadow-xl h-[700px] sm:w-[90%] lg:w-[90%] sm:h-[600px] lg:h-[500px]">
        <div className="flex flex-col justify-center h-full">
          <div className="flex sm:gap-x-10 justify-center items-center w-full">
            <button onClick={prevSlide} className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="flex-wrap flex-col sm:flex-row">
              <Image 
                src={competitions[currentIndex].imageSrc}
                alt={competitions[currentIndex].title}
                width={300}
                height={250}
                className="object-cover items-center rounded-md sm:block hidden"
              />
            </div>
            <div className="w-full sm:w-1/2 ">
              <h2 className="text-2xl sm:text-4xl font-bold mb-4 justify-center text-center sm:text-left">{competitions[currentIndex].title}</h2>
							<div className="justify-center items-center flex mb-6">
              <Image 
                src={competitions[currentIndex].imageSrc}
                alt={competitions[currentIndex].title}
                width={200}
                height={300}
                className="object-cover items-center rounded-md sm:hidden block"
              />
            </div>
              <p className="text-base sm:text-lg text-gray-600 text-center sm:text-left">{competitions[currentIndex].description}</p>
              <div className="flex flex-col sm:flex-row mt-2">
                <Button
                  onClick={() => window.open(competitions[currentIndex].infoLinkMore, "_blank")}
                  className="m-2 font-semibold shadow-md"
                  color="success"
                  size="md"
                >
                  More Information
                </Button>
                <Button
                  onClick={() => window.open(competitions[currentIndex].infoLinkRegis, "_blank")}
                  className="m-2 font-semibold shadow-md"
                  color="danger"
                  size="md"
                >
                  Register
                </Button>
              </div>
            </div>
            <button onClick={nextSlide} className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
