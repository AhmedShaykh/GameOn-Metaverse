"use client";
import { Button } from "@/Components/ui/button";
import { ArrowDownUp, ArrowLeftRight } from "lucide-react";

const Swapper = () => {
    return (
        <div>
            <div className="mt-[5.4rem] md:mt-32 px-5 sm:px-16">
                <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-2 py-10 px-4 md:p-10 bg-[#16182D] rounded-2xl">
                    <div className="bg-[#16182D] my-2 lg:my-1">
                        <div className="flex lg:flex-row gap-3 lg:gap-0 flex-col items-center bg-[#16182D]">
                            <input
                                className="w-[100%] lg:w-60 xl:w-80 bg-[#16182D] bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                type="number"
                            />
                            <select className="w-[100%] lg:w-[5.2rem] bg-[#16182D] bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-2 leading-8 transition-colors duration-200 ease-in-out">
                                <option className="!w-[100%]">BTC</option>
                                <option className="!w-[100%]">ETH</option>
                            </select>
                        </div>

                        <h3 className="bg-[#16182D] text-slate-300 mt-4 md:text-md">
                            You Pay
                        </h3>
                    </div>

                    <div className="bg-[#16182D] flex justify-center my-0 lg:my-3">
                        <Button className="hidden lg:block p-2 rounded-full cursor-pointer bg-[#16182D] border border-gray-700 hover:border-blue-500">
                            <ArrowLeftRight className="bg-[#16182D]" />
                        </Button>

                        <Button className="block lg:hidden p-2 rounded-full cursor-pointer bg-[#16182D] border border-gray-700 hover:border-blue-500">
                            <ArrowDownUp className="bg-[#16182D]" />
                        </Button>
                    </div>

                    <div className="bg-[#16182D] my-2 lg:my-1">
                        <div className="flex lg:flex-row gap-3 lg:gap-0 flex-col items-center bg-[#16182D]">
                            <input
                                className="w-[100%] lg:w-60 xl:w-80 bg-[#16182D] bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                type="number"
                            />
                            <select className="w-[100%] lg:w-[5.2rem] bg-[#16182D] bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-2 leading-8 transition-colors duration-200 ease-in-out">
                                <option className="!w-[100%]">BNB</option>
                                <option className="!w-[100%]">SOL</option>
                            </select>
                        </div>

                        <h3 className="bg-[#16182D] text-slate-300 mt-4 md:text-md">
                            You Receive
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Swapper;