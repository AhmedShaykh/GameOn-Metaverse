"use client";
import { Heading } from "@chakra-ui/react";
import Wrapper from "./Wrapper";
import Team from "./Team";
import FAQ from "./FAQ";

const TeamPage = () => {
    return (
        <div className="py-12 px-8">
            <Wrapper>
                <Heading
                    className="mx-auto max-w-3xl text-center my-12 md:my-[4.8rem]"
                    fontWeight="extrabold"
                    color="gray.50"
                    fontSize={["4xl", "5xl", "6xl"]}
                >
                    Our Team
                </Heading>

                <Team />
                <FAQ />
            </Wrapper>
        </div>
    )
};

export default TeamPage;