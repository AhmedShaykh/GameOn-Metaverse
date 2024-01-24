import { UPIGO_ITEMS } from "@/static";
import { Button } from "./ui/button";
import Image from "next/image";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const UpcomingIGO = () => {
    return (
        <div className="pb-4 px-8 sm:px-20">
            <div className="px-5 pt-6 pb-12 sm:pt-16 sm:pb-20 mx-auto">
                <h2 className="text-2xl sm:text-3xl text-white font-bold sm:px-4 pb-6">
                    Upcoming IGOs
                </h2>

                <div className="flex flex-col xl:flex-row gap-8 xl:gap-5 my-4 px-0 sm:px-2">
                    {UPIGO_ITEMS.map((item, index) => (
                        <div
                            className="bg-[#16182D] p-4 rounded-2xl w-full xl:w-1/3"
                            key={index}
                        >
                            <div className="bg-[#16182D] flex justify-between my-2">
                                <img
                                    className="rounded-xl bg-[#16182D] w-16 h-16 sm:w-24 sm:h-24"
                                    src={item.image}
                                    alt="IGO Image"
                                />

                                <div className="bg-[#16182D] flex flex-col justify-center gap-3">
                                    <h1 className="bg-[#16182D] text-lg sm:text-xl font-bold">
                                        {item.name}
                                    </h1>

                                    <h3 className="bg-[#16182D] text-sm sm:text-md">
                                        Registeration In:
                                    </h3>
                                </div>

                                <div className="flex flex-col justify-center bg-[#16182D]">
                                    <Image
                                        className="bg-[#16182D]"
                                        src={item.chain}
                                        width={25}
                                        height={25}
                                        alt="BlockChain Image"
                                    />
                                </div>
                            </div>

                            <div className="bg-[#16182D] flex justify-between my-8">
                                <h5 className="p-2 rounded-xl text-sm">
                                    <span className="text-slate-600">Total: </span>
                                    ${item.raise}
                                </h5>

                                <h5 className="p-2 rounded-xl text-sm">
                                    <span className="text-slate-600">Value: </span>
                                    ${item.value}
                                </h5>
                            </div>

                            <div className="w-full h-6 mb-4 bg-gray-200 rounded-full">
                                <div
                                    className="h-6 text-md font-medium bg-blue-600 rounded-full text-center"
                                    style={{ width: `${item.widthStyle}` }}
                                >
                                    {item.width}
                                </div>
                            </div>

                            <div className="bg-[#16182D] flex justify-between my-6">
                                <h5 className="text-sm sm:text-md bg-[#16182D]">
                                    0/${item.mecha} MECHA
                                </h5>

                                <h5 className="text-sm sm:text-md bg-[#16182D]">
                                    0 BUSD
                                </h5>
                            </div>

                            <div className="bg-[#16182D] flex justify-between mt-8 mb-4">
                                <Button
                                    className="py-3 px-4 sm:py-4 sm:px-6 text-sm sm:text-md rounded-full cursor-pointer bg-gradient-to-r from-cyan-600 via-blue-800 to-purple-700"
                                >
                                    Participate
                                </Button>

                                <div className="flex justify-center items-center gap-3 bg-[#16182D]">
                                    <FacebookIcon className="bg-[#16182D]" />
                                    <LinkedinIcon className="bg-[#16182D]" />
                                    <TwitterIcon className="bg-[#16182D]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </div >
    )
};

export default UpcomingIGO;