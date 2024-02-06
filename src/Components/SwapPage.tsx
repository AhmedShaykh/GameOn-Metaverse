"use client";
import Swapper from "./Swapper";
import Wrapper from "./Wrapper";
import { Heading } from "@chakra-ui/react";

const SwapPage = () => {
    return (
        <div className="pt-6 md:py-12 px-8">
            <Wrapper>
                <Heading
                    className="mx-auto max-w-3xl text-center my-[4.8rem]"
                    fontWeight="extrabold"
                    color="gray.50"
                    fontSize={["4xl", "5xl", "6xl"]}
                >
                    Swap Token
                </Heading>

                <Swapper />
            </Wrapper>
        </div >
    )
};

export default SwapPage;