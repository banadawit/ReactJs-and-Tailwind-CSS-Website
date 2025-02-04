import React from "react";
import Laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full  bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="/" className="w-[500px] mx-auto my-4"/>
        <div className="flex flex-col justify-center ">
          <p className="text-[#00df9a] font-bold">DATA ANALYSIS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa
            explicabo ducimus itaque qui doloremque, autem exercitationem
            nesciunt enim, magnam eum dicta culpa laboriosam pariatur repellat
            unde quis a esse?
          </p>
          <button className="text-[#00df9a] bg-black w-44 rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
