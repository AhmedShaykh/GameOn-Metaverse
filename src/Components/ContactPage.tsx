"use client";
import { Heading } from "@chakra-ui/react";
import Form from "./Form";
import Grid from "./Grid";
import Wrapper from "./Wrapper";

const ContactPage = () => {
    return (
        <div className="py-12 px-8">
            <Wrapper>
                <Heading
                    className="mx-auto max-w-3xl text-center my-12 md:my-[4.8rem]"
                    fontWeight="extrabold"
                    color="gray.50"
                    fontSize={["4xl", "5xl", "6xl"]}
                >
                    Contact Us
                </Heading>

                <div className="mt-[5.6rem] md:mt-[8.1rem] flex flex-col lg:flex-row gap-8 px-1 sm:px-20">
                    <Form />
                    <Grid />
                </div>
            </Wrapper>
        </div>
    )
};

export default ContactPage;