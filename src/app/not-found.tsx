import React from 'react'
import {Button, ButtonGroup} from "@nextui-org/react";
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#B6463B]">
	<h1 className="text-9xl font-extrabold text-[#6A211F] tracking-widest">404</h1>
	<div className="bg-[#FFD02E] px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>
	<Button 
    color="warning" 
    as={Link}
    variant="ghost" 
    href='/'>
        Home
      </Button>  
</main>
  )
}
