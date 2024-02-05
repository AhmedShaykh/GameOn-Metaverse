import { TEAM_ITEMS } from "@/static";
import {
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon
} from "lucide-react";
import Image from "next/image";

const Team = () => {
    return (
        <div className="px-8 sm:px-20">
            <div className="pt-5 pb-12 sm:py-12 mx-auto">
                <div className="flex flex-wrap px-0 sm:px-2 gap-3 lg:gap-0 my-4">
                    {TEAM_ITEMS.map((item, index) => (
                        <div key={index} className="px-0 sm:px-2 w-full lg:w-1/3">
                            <div className="bg-[#16182D] px-2 sm:px-3 pt-12 pb-16 rounded-[2rem] text-center">
                                <div className="inline-flex justify-center items-center mb-5 flex-shrink-0 bg-[#16182D]">
                                    <Image
                                        className="p-2 bg-gradient-to-r from-cyan-600 via-blue-800 to-purple-700 text-transparent rounded-lg"
                                        src={item.url}
                                        width={80}
                                        height={80}
                                        alt="Team Member"
                                    />
                                </div>

                                <div className="flex-grow text-center mb-4 bg-[#16182D]">
                                    <h2 className="text-white text-2xl font-bold mb-3 bg-[#16182D]">
                                        {item.name}
                                    </h2>

                                    <p className="text-slate-300 leading-8 text-md bg-[#16182D]">
                                        {item.role}
                                    </p>
                                </div>

                                <div className="flex justify-center gap-3 bg-[#16182D]">
                                    <FacebookIcon className="bg-[#16182D]" />
                                    <LinkedinIcon className="bg-[#16182D]" />
                                    <TwitterIcon className="bg-[#16182D]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Team;