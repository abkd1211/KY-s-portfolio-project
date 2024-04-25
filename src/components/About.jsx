import React from 'react'
import aboutImg from '../assets/about4.jpeg';



const About = () => {
  return (
    <div className='py-10 text-white bg-[#232325] h-auto' id='about'>
        <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>

            <div> 
                <div className='w-[400px] h-full'>
                    <img 
                        src={aboutImg}
                        alt=''
                        className='object-cover rounded-xl h-[300px] filter grayscale brightness-50'
                    />
                </div>
            </div>


            <div>
                <div className='p-2'>
                    <div className='text-gray-300 my-3'>
                        <h3 className='text-4xl font-semibold mb-5'>About <span>Me</span></h3>
                        <p className='text-justify leading-7 w-11/12 mx-auto'>
                            I'm Kwabena Yeboah; 
                            Welcome to this channel, which is about motivation, 
                            self-improvement and Inspirations. This channel became
                            active on January 2023. I'm a firm believer that everyone 
                            has the potential to achieve greatness, and I'm here to help you 
                            unlock that potential. On my channel, you'll find inspiring stories, 
                            helpful tips, and practical advice to help you reach your goals.
                        </p>
                    </div>
                </div>

                <div className='flex mt-10 items-center gap-7'>
                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl font-semibold text-white'>30
                            <span className='primary-text'>+</span>{""}
                        </h3>
                        <p><span className='md:text-base text-xs'>Videos</span></p>
                    </div>

                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl font-semibold text-white'>1
                            <span className='primary-text'>+</span>{""}
                        </h3>
                        <p><span className='md:text-base text-xs'>years experience</span></p>
                    </div>

                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl font-semibold text-white'>1k
                            <span className='primary-text'>+</span>{""}
                        </h3>
                        <p><span className='md:text-base text-xs'>happy viewers</span></p>
                    </div>
                </div>

            </div>
        </div>

        <div className='flex mt-20 justify-center items-center'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/X83KTq-yVIs?si=SE3DQTUrIY4PlBnU" 
                title="YouTube video player" frameborder="0" allow="accelerometer; 
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
                web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
        </div>
        
    </div>
  )
}

export default About