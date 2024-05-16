import { Link } from '@nextui-org/react'
import React from 'react'


const SideBar = () => {
  return (
    <div>
      <ul className='sideBar'>
            <li>
              <Link href="">Men's Fashion</Link>
            </li>
            <li>
              <Link href="">Health & Beauty</Link>
            </li>
            <li>
              <Link href="">Women's Fashion</Link>
            </li>
            <li>
              <Link href="">Electronic Devices</Link>
            </li>
            <li>
              <Link href="">Home & Lifestyle</Link>
            </li>
            <li>
              <Link href="">Sports & Outdoor</Link>
            </li>
            <li>
              <Link href="">TV & Home Appliances</Link>
            </li>
            <li>
              <Link href="">Watches & Accessories</Link>
            </li>

          </ul>
    </div>
  )
}

export default SideBar
