"use client";
import { Heading } from "@chakra-ui/react";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <div className="py-12 px-8">
            <h3 className="text-center text-blue-700 py-5 text-lg">
                GAMEON
            </h3>

            <Heading
                className="mx-auto max-w-3xl text-center"
                fontWeight="extrabold"
                color="gray.50"
                fontSize={["4xl", "5xl", "6xl"]}
            >
                The Next Generation Web 3.0 IGO Launchpad
            </Heading>

            <p className="my-6 text-center text-lg sm:text-xl lg:text-2xl font-medium text-slate-600">
                Full-scale Blockchain Gaming Ecosystem for IGOs & NFT Pre-Sales
            </p>

            <div className="my-12 flex flex-col md:flex-row justify-center items-center gap-6">
                <Button
                    className="py-4 px-6 md:py-5 md:px-7 lg:py-7 lg:px-9 text-md md:text-lg lg:text-xl rounded-full cursor-pointer bg-gradient-to-r from-cyan-600 via-blue-800 to-purple-700"
                >
                    Explore IGOs
                </Button>

                <Button
                    className="py-4 px-6 md:py-5 md:px-7 lg:py-7 lg:px-9 text-md md:text-lg lg:text-xl rounded-full cursor-pointer bg-gradient-to-r from-cyan-600 via-blue-800 to-purple-700"
                >
                    Apply Now
                </Button>
            </div>
        </div>
    )
};

export default Header;