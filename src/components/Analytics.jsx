import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
    return (
        <div className="w-full bg-gray-100 py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
                <img src={Laptop} alt="Laptop" className="w-[500px] mx-auto my-4 rounded-lg shadow-lg"/>
                <div className="flex flex-col justify-center">
                    <p className="text-blue-600 font-semibold">DATA ANALYSIS DASHBOARD</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa
                        explicabo ducimus itaque qui doloremque, autem exercitationem
                        nesciunt enim, magnam eum dicta culpa laboriosam pariatur repellat
                        unde quis a esse?
                    </p>
                    <button className="text-white bg-blue-600 hover:bg-blue-700 w-44 rounded-md font-medium my-6 mx-auto md:mx-0 py-3 transition duration-300">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
