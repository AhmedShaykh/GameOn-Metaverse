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
            <div className="px-5 pt-6 pb-12 sm:pt-16 sm:pb-20 mx-auto">
                <h2 className="text-2xl sm:text-3xl text-white font-bold sm:px-4 pb-3">
                    Our Team
                </h2>

                <div className="flex px-2 gap-3 lg:gap-0 my-4">
                    {TEAM_ITEMS.map((item, index) => (
                        <div key={index} className="px-2 py-4 w-full lg:w-1/3">
                            <div className="h-full w-full bg-[#16182D] px-2 sm:px-3 pt-12 pb-16 rounded-lg text-center">
                                <div className="w-20 h-20 inline-flex justify-center items-center mb-5 flex-shrink-0 bg-[#16182D]">
                                    <Image
                                        className="p-2 bg-gradient-to-r from-cyan-600 via-blue-800 to-purple-700 text-transparent rounded-lg"
                                        src={item.url}
                                        width={120}
                                        height={120}
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