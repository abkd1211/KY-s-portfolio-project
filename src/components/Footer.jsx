import React from 'react'
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <div class='mt-12 w-max-[800px] border-t border-gray-500 text-center'>
        <p class='my-5 text-gray-500'>Mindset Mastery <br/>Build your mindset</p>
        <div class='inline-flex text-gray-500 gap-4 text-3xl'>
            <FaYoutube/>
            <FaInstagram/>
            <FaTwitter/>
            <FaFacebook/>
        </div>
    </div>
  )
}

export default Footer