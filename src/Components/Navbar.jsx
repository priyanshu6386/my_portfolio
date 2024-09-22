import React from 'react'
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa"
import logo from "../assets/PriyanshuVermaLogo.jpg";
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
       <div className='felx felx-shrink-0 items-center'>
        <a href='/' aria-label='Home'>
          <img src={logo} className='mx-2' width={50} height={33} alt='logo'/>
        </a>
       </div>
       <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
       
        <a href="https://www.linkedin.com/in/priyanshu-verma-010867189/" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
            <FaLinkedin/>
        </a>

        <a href="https://github.com/priyanshu6386" target='_blank' rel='noopener noreferrer' aria-label='Github'>
            <FaGithub/>
        </a>

        <a href="https://www.instagram.com/vermaprincepriyanshu/" target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
            <FaInstagram/>
        </a>

        <a href="https://twitter.com/" target='_blank' rel='noopener noreferrer' aria-label='Twitter'>
            <FaTwitter/>
        </a>

       </div>
    </nav>
  )
}

export default Navbar
