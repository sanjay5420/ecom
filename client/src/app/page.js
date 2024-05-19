'use client'
import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Input, Image } from "@nextui-org/react";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import CustomNavBar from './components/navbar/page';
import SideBar from './components/sidebar/page';
import { useSelector } from 'react-redux';


const page = () => {
  const z = useSelector(state => state.product.wishListItems)
  const products = [{ id: 1, topic: 'Summer Lightweight Bikers Jacket', category: 'Mens Fashion', productImage: "https://static-01.daraz.com.np/p/e03fec6436b14874cb51edc4a7a02ba8.jpg_400x400q75-product.jpg_.webp", price: 3500 },
  { id: 2, topic: 'boAt STORM CALL |Smart Watch |', category: 'Watches', productImage: "https://static-01.daraz.com.np/p/43c8a719c316d060e71c0814206f19c3.png_400x400q75-product.jpg_.webp", price: 9000 },
  { id: 3, topic: 'KS01 W-King Bluetooth Speaker', category: 'Electronics', productImage: "https://static-01.daraz.com.np/p/5ff620382b52b6a100bef2432b9ee691.jpg_400x400q75-product.jpg_.webp", price: 2300 },
  { id: 4, topic: 'Gopherwood G210M Solid Top Acoustic Guitar', category: 'Home & Lifestyle', productImage: "https://np-live-21.slatic.net/kf/Sceaaca5ac98c4797b820ab792e3dd344V.jpg", price: 29999 },
  { id: 5, topic: 'Samsung Fridge', category: 'Home Appliances', productImage: 'https://static-01.daraz.com.np/p/5c1df5a7c1b9462c12b49eefb01ee014.jpg', price: 5000 },
  { id: 6, topic: 'Samsung Fridge', category: 'Home Appliances', productImage: 'https://static-01.daraz.com.np/p/5c1df5a7c1b9462c12b49eefb01ee014.jpg', price: 5000 },
  { id: 7, topic: 'Samsung Fridge', category: 'Home Appliances', productImage: 'https://static-01.daraz.com.np/p/5c1df5a7c1b9462c12b49eefb01ee014.jpg', price: 5000 },
  { id: 8, topic: 'Samsung Fridge', category: 'Home Appliances', productImage: 'https://static-01.daraz.com.np/p/5c1df5a7c1b9462c12b49eefb01ee014.jpg', price: 5000 }]
  return (
    <div className='mainHome'>
      <CustomNavBar />

      {/* *****First Section Starts**** */}
      <section className='sec1 grid md:grid-rows-1 lg:grid-cols-4 flex justify-center'>

        <div className='col-span-1 sideBar p-2'>
          <SideBar />
        </div>


        <div className='md:col-span-3 carousal'>
          <Carousel>
            <div>
              <Image src="https://icms-image.slatic.net/images/ims-web/6bce38c5-5482-49b9-b9ea-ec8e4ccdb3b1.jpg" />

            </div>
            <div>
              <Image src="https://icms-image.slatic.net/images/ims-web/dac36d64-90e1-4a9e-8744-d72786b4731b.jpg" />

            </div>
            <div>
              <Image src="https://icms-image.slatic.net/images/ims-web/f533d071-a72c-4e56-8528-9596095ac64a.jpg" />

            </div>
          </Carousel>
        </div>

      </section>

      {/* *****First Section Ends**** */}

      <section className='sec1'><h1>Top Deals</h1></section>


      {/* <section className='sec1 grid grid-row-1 md:grid-cols-4'>
        <Link style={{ cursor: 'pointer' }}>
          <div className=''>
            <Card className="py-4 m-2">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={270}
                />
              </CardBody>
            </Card>
          </div>
        </Link>

        <Link style={{ cursor: 'pointer' }}>
          <div className=''>
            <Card className="py-4 m-5">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={270}
                />
              </CardBody>
            </Card>
          </div>
        </Link>


        <Link style={{ cursor: 'pointer' }}>
          <div className=''>
            <Card className="py-4 m-5">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={270}
                />
              </CardBody>
            </Card>
          </div>
        </Link>

        <Link style={{ cursor: 'pointer' }}>
          <div className=''>
            <Card className="py-4 m-5">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={270}
                />
              </CardBody>
            </Card>
          </div>
        </Link>

      </section> */}

      <section className='sec1 grid grid-row-1 md:grid-cols-4'>
        {products.map((item => {
          return (

            <Link style={{ cursor: 'pointer' }}>
              <div className=''>
                <Card className="m-2 card">
                  <Image
                    alt="Card background"
                    className="object-fit rounded-xl"
                    src={item.productImage}
                    width={300}
                  // "https://nextui.org/images/hero-card-complete.jpeg"
                  />
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">{item.topic}</h4>
                    <small className="text-default-500">{item.category}</small>
                    <p className="text-tiny font-bold" style={{ color: '#007C64' }}>{'Rs.' + item.price}</p>


                  </CardHeader>
                  <CardBody className="overflow-visible py-2">

                  </CardBody>
                </Card>
              </div>
            </Link>

          )
        }))}



      </section>

      <section className='sec1'><h1>Featured</h1></section>

      <section className='sec1 grid grid-row-1 md:grid-cols-4'>
        {products.map((item => {
          return (

            <Link style={{ cursor: 'pointer' }}>
              <div className=''>
                <Card className="m-2 card">
                  <Image
                    alt="Card background"
                    className="object-fit rounded-xl"
                    src={item.productImage}
                    width={300}
                  // "https://nextui.org/images/hero-card-complete.jpeg"
                  />
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">{item.topic}</h4>
                    <small className="text-default-500">{item.category}</small>
                    <p className="text-tiny font-bold" style={{ color: '#007C64' }}>{'Rs.' + item.price}</p>


                  </CardHeader>
                  <CardBody className="overflow-visible py-2">

                  </CardBody>
                </Card>
              </div>
            </Link>

          )
        }))}



      </section>


    </div>
  )
}

export default page
