"use client"

import { TypeAnimation } from 'react-type-animation';
 
export const Profession = () => {
  return (
    <TypeAnimation
      sequence={[
        600,
        'Systemutvecklare', // Types 'One'
        3300, 
        'Student',
        3300,
        'Webbutvecklare',
        3300, // Waits 2s
        'Programmerare', 
        3300
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className='mx-auto text-7xl font-bold bg-gradient-to-r from-orange-700 via-purple-600 to-orange-700 text-transparent bg-clip-text animate-gradient text-center block'
    />
  );
};