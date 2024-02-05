import { WORK_ITEMS } from "@/static";
import Image from "next/image";

const Participate = () => {
    return (
        <div className="px-5 sm:px-20">
            <div className="px-5 pt-6 pb-12 sm:pt-20 sm:pb-[4.4rem] mx-auto">
                <h2 className="text-2xl sm:text-3xl text-white font-bold sm:px-4">
                    How To Participate
                </h2>

                <div className="flex flex-wrap my-10 md:space-y-0 space-y-6">
                    {WORK_ITEMS.map((item, index) => (
                        <div
                            className="sm:p-4 lg:w-1/3 md:w-1/2 flex flex-col"
                            key={index}
                        >
                            <div className="w-20 h-20 inline-flex items-center mb-5 flex-shrink-0">
                                <Image
                                    className="p-2 bg-gradient-to-r from-cyan-600 via-blue-800 to-purple-700 text-transparent rounded-lg"
                                    src={item.icon}
                                    width={60}
                                    height={60}
                                    alt={item.alt}
                                />
                            </div>

                            <div className="flex-grow">
                                <h2 className="text-white text-2xl font-bold mb-5">
                                    {item.title}
                                </h2>

                                <p className="text-slate-300 leading-8 text-md">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Participate;