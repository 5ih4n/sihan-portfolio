"use client"

import { TypeAnimation } from 'react-type-animation';
 
export const Profession = () => {
  return (
    <TypeAnimation
      sequence={[
        1500,
        'Systemutvecklare', // Types 'One'
        3000, 
        'Student',
        3000,
        'Webbutvecklare',
        3000, // Waits 2s
        'Programmerare', // Types 'Three' without deleting 'Two'
        3000
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className='mx-auto text-7xl font-bold bg-gradient-to-r from-orange-700 via-purple-600 to-orange-700 text-transparent bg-clip-text animate-gradient text-center block'
    />
  );
};