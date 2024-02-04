"use client";
import { Button } from "@/Components/ui/button";

const Form = () => {
    return (
        <div className="grid col-12 md:col-7 w-full">
            <div className="py-5 px-7 md:p-12 bg-[#16182D] rounded-2xl">
                <h2 className="mb-10 mt-6 md:mt-2 text-2xl sm:text-3xl text-white font-bold bg-[#16182D]">
                    Get In Touch!
                </h2>

                <div className="my-8 bg-[#16182D]">
                    <label className="leading-7 text-lg sm:text-xl text-white bg-[#16182D]">
                        First Name
                    </label>

                    <input
                        className="w-full bg-[#16182D] bg-opacity-40 mt-3 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Enter First Name"
                        type="text"
                    />
                </div>

                <div className="my-8 bg-[#16182D]">
                    <label className="leading-7 text-lg sm:text-xl text-white bg-[#16182D]">
                        Last Name
                    </label>

                    <input
                        className="w-full bg-[#16182D] bg-opacity-40 mt-3 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Enter Last Name"
                        type="text"
                    />
                </div>

                <div className="my-8 bg-[#16182D]">
                    <label className="leading-7 text-lg sm:text-xl text-white bg-[#16182D]">
                        Email Address
                    </label>

                    <input
                        className="w-full bg-[#16182D] bg-opacity-40 mt-3 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Enter Email Address"
                        type="email"
                    />
                </div>

                <div className="my-8 bg-[#16182D]">
                    <label className="leading-7 text-lg sm:text-xl text-white bg-[#16182D]">
                        Phone Number
                    </label>

                    <input
                        className="w-full bg-[#16182D] bg-opacity-40 mt-3 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Enter Phone Number"
                        type="number"
                    />
                </div>

                <div className="my-8 bg-[#16182D]">
                    <label className="leading-7 text-lg sm:text-xl text-white bg-[#16182D]">
                        Message
                    </label>

                    <textarea
                        className="w-full bg-[#16182D] bg-opacity-40 mt-3 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Enter Message"
                        rows={5}
                    />
                </div>

                <Button
                    className="mb-4 md:mb-0 py-4 px-6 md:py-5 md:px-7 text-md md:text-lg rounded-full cursor-pointer bg-gradient-to-r from-cyan-600 via-blue-800 to-purple-700"
                >
                    Submit Message
                </Button>
            </div>
        </div>
    )
};

export default Form;