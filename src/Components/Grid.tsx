import { CONTACT_ITEMS } from "@/static";

const Grid = () => {
    return (
        <div className="grid col-12 md:col-4 w-full lg:w-[60%]">
            <div className="flex flex-col gap-8">

                {CONTACT_ITEMS.map((item, index) => (
                    <div
                        className="py-4 px-5 md:p-9 bg-[#16182D] rounded-2xl"
                        key={index}
                    >
                        <div className="flex gap-4 md:gap-5 items-center bg-[#16182D]">
                            <img
                                className="w-[3.8rem] lg:w-[4.5rem] h-[3.8rem] lg:h-[4.5rem] p-2 bg-gradient-to-r from-cyan-600 via-blue-800 to-purple-700 text-transparent rounded-lg"
                                src={item.icon}
                                alt={item.title}
                            />

                            <div className="bg-[#16182D]">
                                <h1 className="bg-[#16182D] text-white text-xl md:text-2xl font-bold mb-2">
                                    {item.title}
                                </h1>

                                <h3 className="bg-[#16182D] text-slate-300 leading-8 text-sm md:text-md">
                                    {item.details}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Grid;