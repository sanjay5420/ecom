'use client'
import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Input, Image } from "@nextui-org/react";

const CustomNavBar = () => {
    return (    
          <Navbar className='bg-sky-200' style={{ backgroundColor: '#2F3259' }}>
                    <NavbarBrand>

                        <p className="font-bold text-inherit text-white">ACME</p>
                    </NavbarBrand>
                    <NavbarContent className="hidden sm:flex gap-4" justify="center">
                        <NavbarItem>
                            <Link color="foreground" href="#">
                                <Input
                                    type="text"
                                    label="Search"
                                    defaultValue=""
                                    className="w-80 h-2 "
                                />
                            </Link>
                        </NavbarItem>
                        {/* <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
                    </NavbarContent>
                    <NavbarContent justify="end">
                        <NavbarItem className="hidden lg:flex">
                            <Link href="#">Login</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Button as={Link} href="#" variant="flat" className='bg-sky-500'>
                                Sign Up
                            </Button>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
        
        
    )
}

export default CustomNavBar
