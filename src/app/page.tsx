import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const competitions = [
  {
    title: "Essay for College",
    imageSrc: "/Assets/Poster/Poster-Essay-Mahasiswa.png",
    infoLink: "https://drive.google.com/file/d/1tRexwW-sCqm2hewwcoocHnPdpoNYgbFe/view?usp=sharing",
  },
  {
    title: "Essay for Student",
    imageSrc: "/Assets/Poster/Poster-Essay-Siswa.png",
    infoLink: "https://drive.google.com/file/d/19bnUDcF-z8aJvYp0FdQMH80lN_lmrHaV/view?usp=sharing",
  },
  {
    title: "Handling Competition",
    imageSrc: "/Assets/Poster/Poster-CHC.jpg",
    infoLink: "https://drive.google.com/file/d/1CBTI_3UaI7yr0sCJIHID7j9eMYvsfHGz/view?usp=sharing",
  },
  {
    title: "Poster Competition",
    imageSrc: "/Assets/Poster/Poster-Poster-Competition.png",
    infoLink: "https://drive.google.com/file/d/1KIc3PY0niLca5ipB6v6wdQ6hS22VOEdX/view?usp=sharing",
  },
];

export default function Home() {
  return (
    <>
      <div className="h-screen bg-[#F5FEDF]">
        <section className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
          <div className="w-full h-128 lg:w-1/2 lg:h-auto">
            <Image 
              src="/Assets/Logo/logo-icw.png"
              width={600}
              height={600}
              alt="logo icw"
            />
          </div>
          <div className="max-w-lg bg-[#FBE996] md:max-w-2xl md:z-10 md:shadow-lg md:absolute rounded-xl md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
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

      <section className="text-[#fff] h-128 bg-[#6A211F] body-font justify-center items-center">
        <div className="container px-6 pt-64 pb-2 sm:py-50 md:py-6 mx-auto">
          <h1 className="text-center items-center align-middle m-8 text-5xl font-semibold">Competition</h1>
          <div className="grid grid-cols-1 grid-rows-4 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 -m-4 mb-6 mt-10 justify-center items-center text-center space-y-6">
            {competitions.map((competition, index) => (
              <div key={index} className="md:w-80 sm:w-1/2 w-full">
                <div className="border-2 border-[#fff] px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  <Image 
                    src={competition.imageSrc}
                    width={250}
                    height={250}
                    alt="poster"
                    className="mx-auto"
                  />
                  <h2 className="title-font font-medium mt-3 text-3xl text-[#fff]">{competition.title}</h2>
                  <div className="mt-6">
                    <Button 
                      href={competition.infoLink}
                      as={Link}
                      target="_blank"
                      className="m-2 mt-3" 
                      color="success">
                        More Information
                    </Button> 
                    <Button href="/" className="m-2 mt-3" color="primary">Register</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
