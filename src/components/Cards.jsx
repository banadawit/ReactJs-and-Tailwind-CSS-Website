import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
return (
    <div className="w-full py-[10rem] px-4 bg-gray-100">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 transition-all duration-300 bg-white">
                <img className="w-20 mx-auto mt-[-3rem]" src={Single} alt="Single User" />
                <h1 className="text-2xl font-bold text-center py-8">Single User</h1>
                <p className="text-center text-4xl font-bold">$149</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                    <p className="py-2 border-b mx-8">1 Granted User</p>
                    <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                </div>
                <button className="bg-blue-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">Start Trial</button>
            </div>
            <div className="w-full shadow-xl bg-gray-100 flex flex-col py-4 my-4 rounded-lg hover:scale-105 transition-all duration-300 ">
                <img className="w-20 mx-auto mt-[-3rem]" src={Double} alt="Double User" />
                <h1 className="text-2xl font-bold text-center py-8">Double User</h1>
                <p className="text-center text-4xl font-bold">$199</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
                    <p className="py-2 border-b mx-8">2 Granted Users</p>
                    <p className="py-2 border-b mx-8">Send up to 10 GB</p>
                </div>
                <button className="bg-blue-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">Start Trial</button>
            </div>
            <div className="w-full shadow-xl bg-gray-200 flex flex-col py-4 my-4 rounded-lg hover:scale-105 transition-all duration-300 ">
                <img className="w-20 mx-auto mt-[-3rem]" src={Triple} alt="Triple User" />
                <h1 className="text-2xl font-bold text-center py-8">Triple User</h1>
                <p className="text-center text-4xl font-bold">$299</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">2 TB Storage</p>
                    <p className="py-2 border-b mx-8">3 Granted Users</p>
                    <p className="py-2 border-b mx-8">Send up to 20 GB</p>
                </div>
                <button className="bg-blue-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">Start Trial</button>
            </div>
        </div>
    </div>
);
};

export default Cards;
