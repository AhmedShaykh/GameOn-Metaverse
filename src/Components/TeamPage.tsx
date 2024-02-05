"use client";
import { Heading } from "@chakra-ui/react";
import Team from "./Team";
import FAQ from "./FAQ";

const TeamPage = () => {
    return (
        <div className="py-12 px-8">
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
        </div>
    )
};

export default TeamPage;