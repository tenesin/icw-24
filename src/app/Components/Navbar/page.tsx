"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", 
      href: "/" },
    { name: "Competition", 
      href: "/competition" },
    { name: "Talk Show", 
      href: "/comingsoon" }, 
    { name: "Company Visit", 
      href: "/comingsoon" }, 
    { name: "ICW Night", 
     href: "/comingsoon" }, 
  ];

  return (
    <Navbar  isBlurred={true} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          
        <Image 
                    src="/Assets/Logo/logo-icw.png"
                    width={50}
                    height={50}
                    alt="poster"
                    
                  />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/competition">
            Competition
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/comingsoon">
            Talk Show
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/comingsoon">
            Company Visit
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/comingsoon">
            ICW Night
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">

        <NavbarItem>
          <Button as={Link} color="danger" href="https://wa.me/+6285790747035" target="_blank" variant="flat">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 1 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
