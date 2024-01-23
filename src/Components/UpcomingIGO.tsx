import { UPIGO_ITEMS } from "@/static";
import Image from "next/image";

const UpcomingIGO = () => {
    return (
        <div className="px-8 sm:px-20">
            <div className="px-5 pt-6 pb-12 sm:pt-16 sm:pb-20 mx-auto">
                <h2 className="text-2xl sm:text-3xl text-white font-bold sm:px-4 pb-3">
                    Upcoming IGOs
                </h2>

                <div className="flex gap-x-4 my-4 sm:px-4">
                    {UPIGO_ITEMS.map((item, index) => (
                        <div
                            className="bg-[#16182D] p-4 rounded-2xl lg:w-1/3"
                            key={index}
                        >
                            <div className="bg-[#16182D] flex justify-between my-2">
                                <Image
                                    className="rounded-xl bg-[#16182D]"
                                    src={item.image}
                                    width={100}
                                    height={100}
                                    alt="IGO Image"
                                />

                                <div className="bg-[#16182D] flex flex-col justify-center gap-3">
                                    <h1 className="bg-[#16182D] text-xl font-bold">
                                        {item.name}
                                    </h1>

                                    <h3 className="bg-[#16182D]">
                                        Registeration In:
                                    </h3>
                                </div>

                                <div className="flex flex-col justify-center bg-[#16182D]">
                                    <Image
                                        className="bg-[#16182D]"
                                        src={item.chain}
                                        width={26}
                                        height={26}
                                        alt="BlockChain Image"
                                    />
                                </div>
                            </div>

                            <div className="bg-[#16182D] flex justify-around my-8">
                                <h5 className="p-2 rounded-xl text-sm">
                                    <span className="text-slate-600">Total Raise: </span>
                                    ${item.raise}
                                </h5>

                                <h5 className="p-2 rounded-xl text-sm">
                                    <span className="text-slate-600">Value: </span>
                                    ${item.value}
                                </h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default UpcomingIGO;