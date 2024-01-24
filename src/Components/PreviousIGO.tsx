import { PREVIGO_ITEMS } from "@/static";
import Image from "next/image";

const PreviousIGO = () => {
    return (
        <div className="px-8 sm:px-20">
            <div className="px-5 pt-6 pb-16 sm:pt-16 sm:pb-20 mx-auto">
                <h2 className="text-2xl sm:text-3xl text-white font-bold sm:px-4 pb-3">
                    Previous IGO
                </h2>

                <div className="sm:px-4 mt-8 mb-3 flex flex-col gap-10 md:gap-8">
                    {PREVIGO_ITEMS.map((item, index) => (
                        <div
                            className="bg-[#16182D] p-4 md:p-8 rounded-2xl"
                            key={index}
                        >
                            <div className="flex flex-col md:flex-row justify-between bg-[#16182D] gap-8">
                                <div className="bg-[#16182D] flex items-center gap-6">
                                    <img
                                        className="rounded-xl bg-[#16182D] w-20 h-20 md:w-24 md:h-24"
                                        src={item.image}
                                        alt="IGO Image"
                                    />

                                    <div className="bg-[#16182D] flex flex-col flex-1 justify-center gap-3">
                                        <h1 className="bg-[#16182D] text-md md:text-xl font-bold">
                                            {item.name}
                                        </h1>

                                        <h4 className="bg-[#16182D] text-sm">
                                            {`Price (GAC) = ${item.price} BUSD`}
                                        </h4>
                                    </div>
                                </div>

                                <div className="bg-[#16182D] flex items-center justify-between gap-3 md:w-[50%]">
                                    <Image
                                        className="bg-[#16182D]"
                                        src={item.chain}
                                        width={25}
                                        height={25}
                                        alt="BlockChain Image"
                                    />

                                    <h5 className="p-2 rounded-xl text-sm">
                                        x{item.power}
                                    </h5>

                                    <h5 className="p-2 rounded-xl text-sm">
                                        <span className="text-slate-600">ATH: </span>
                                        ${item.totalPrice}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default PreviousIGO;