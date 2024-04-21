"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Competition",
    "Talk show",
    "Company Visit",
    "ICW Night",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
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
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="#">
            Competition
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Talk Show
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Company Visit
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            ICW Night
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">

        <NavbarItem>
          <Button as={Link} color="danger" href="https://wa.me/+6281232113695" target="_blank" variant="flat">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
