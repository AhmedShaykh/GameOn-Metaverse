import { PREVIGO_ITEMS } from "@/static";
import Image from "next/image";

const PreviousIGO = () => {
    return (
        <div className="px-8 sm:px-20">
            <div className="px-5 pt-6 pb-12 sm:pt-16 sm:pb-20 mx-auto">
                <h2 className="text-2xl sm:text-3xl text-white font-bold sm:px-4 pb-3">
                    Previous IGO
                </h2>

                <div className="sm:px-4 mt-8 mb-3 flex flex-col gap-8">
                    {PREVIGO_ITEMS.map((item, index) => (
                        <div
                            className="bg-[#16182D] p-8 rounded-2xl"
                            key={index}
                        >
                            <div className="flex flex-col md:flex-row justify-between bg-[#16182D] gap-4">
                                <div className="bg-[#16182D] flex gap-6 w-1/2">
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
                                            {`Price (GAC) = ${item.price} BUSD`}
                                        </h3>
                                    </div>
                                </div>

                                <div className="bg-[#16182D] flex items-center justify-between gap-4 w-1/2">
                                    <Image
                                        className="bg-[#16182D]"
                                        src={item.chain}
                                        width={26}
                                        height={26}
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