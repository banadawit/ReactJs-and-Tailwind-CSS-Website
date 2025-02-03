# Portfolio

This project showcases a hero component for a portfolio website, built with React.

## Hero Component

The Hero component is designed to provide a visually appealing introduction to the website. It includes a dynamic typed text effect and a responsive layout.

### Features

- **Dynamic Typed Text**: Uses `ReactTyped` to create a typing animation for the financing text.
- **Responsive Design**: The layout adjusts for different screen sizes, ensuring a great user experience on both mobile and desktop devices.
- **Styled with Tailwind CSS**: Utilizes Tailwind CSS for styling, making it easy to customize and maintain.

### Code Example

```jsx
import React from 'react';
import { ReactTyped } from "react-typed";

const FINANCING_TEXT = "Fast, flexible financing for businesses";

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center text-white">
      <div className="max-w-[800px] mx-auto text-center flex flex-col justify-center px-4">
        <p className="text-[#00df9a] font-bold uppercase">Growing with Data Analytics</p>
        <h1 className="font-bold text-4xl md:text-7xl sm:text-6xl my-4">Grow with data.</h1>

        <div className="text-gray-400 text-xl flex justify-center items-center gap-2 leading-relaxed">
          <p>{FINANCING_TEXT}</p>
          <ReactTyped
            className="text-[#00df9a] font-bold"
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>

        <p className="md:text-2xl text-lg font-semibold text-gray-300 mt-4">
            Monitor your data analytics to increase revenue for B2B, BTC & SaaS platforms.
        </p>
      </div>
    </div>
  );
};

export default Hero;
