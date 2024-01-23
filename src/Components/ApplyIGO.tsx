import { Button } from "./ui/button";

const ApplyIGO = () => {
    return (
        <div className="px-8 sm:px-20">
            <div className="mx-auto flex px-5 py-12 sm:py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg xl:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 flex justify-center items-center">
                    <img
                        src={"https://theme-land.com/gamefi/assets/img/content/cta_thumb.png"}
                        className="object-cover object-center w-[70%] h-[70%]"
                        alt="hero"
                    />
                </div>

                <div className="lg:flex-grow md:w-1/2 lg:pl-20 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="sm:text-5xl text-4xl leading-relaxed font-semibold text-white pb-2">
                        Apply For IGO
                    </h1>

                    <p className="text-md mt-3 mb-8 text-slate-300 leading-8">
                        Get access to huge set of tools seamlessly handle your games intergration with blockchain
                    </p>

                    <Button
                        className="py-4 px-6 md:py-5 md:px-7 lg:py-7 lg:px-9 text-md md:text-lg lg:text-xl rounded-full cursor-pointer bg-gradient-to-r from-cyan-600 via-blue-800 to-purple-700"
                    >
                        Apply Now
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default ApplyIGO;