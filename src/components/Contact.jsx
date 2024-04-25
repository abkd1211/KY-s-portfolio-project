import React from 'react'

const Contact = () => {
  return (
    <div class='flex justify-center my-5 h-full sm:h-[70vh] items-center' id='contact'>
        <div class='max-w-[1200px] mx-auto'>
            <div class='grid grid-cols-1 md:grid-cols-2'>
                <div class='p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around'>
                    <h1 class='text-4xl sm:text-5xl text-white'>
                        Contact <span>Me</span>
                    </h1>

                    <p class='text-normal text-lg font-medium text-gray-400 mt-2'>
                        Let's connect on social media <br/> or send me an Email
                    </p>

                    <div class='flex items-center mt-2 text-gray-400'>
                        <svg fill='none' stroke='currentColor' sroke-linecap='round' sroke-linejoin='round'>
                            <path></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact