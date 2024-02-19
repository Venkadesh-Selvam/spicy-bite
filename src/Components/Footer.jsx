import React from 'react';
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-4 bg-[#24262b]'>
        <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-red-500'>SpicyBite</h1>
                <p className='w-[1120px] items-center'>Thank you for choosing SpicyBite for your dining experience. Our culinary team is dedicated to crafting exquisite dishes that tantalize your taste buds, using only the finest and freshest ingredients. We believe in creating a warm and inviting atmosphere where you can savor each moment, whether it's a casual meal with friends or a special celebration. At SpicyBite, we are committed to delivering exceptional service and a memorable dining experience. Join us as we embark on a culinary journey, where every bite tells a story and every meal becomes a cherished memory. We look forward to welcoming you to our table soon.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>
            <br />
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>Thanjavur</li>
                        <li className='py-2 text-sm'>Trichy</li>
                        <li className='py-2 text-sm'>Chennai</li>
                        <li className='py-2 text-sm'>Coimbatore</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>Thanjavur</li>
                        <li className='py-2 text-sm'>Trichy</li>
                        <li className='py-2 text-sm'>Chennai</li>
                        <li className='py-2 text-sm'>Coimbatore</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>Thanjavur</li>
                        <li className='py-2 text-sm'>Trichy</li>
                        <li className='py-2 text-sm'>Chennai</li>
                        <li className='py-2 text-sm'>Coimbatore</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>Thanjavur</li>
                        <li className='py-2 text-sm'>Trichy</li>
                        <li className='py-2 text-sm'>Chennai</li>
                        <li className='py-2 text-sm'>Coimbatore</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer;
