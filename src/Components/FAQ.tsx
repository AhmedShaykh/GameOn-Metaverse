import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";

const FAQ = () => {
    return (
        <div className="px-2 py-2 md:py-3 md:px-4">
            <h3 className="text-center text-blue-700 py-5 text-md sm:text-lg">
                FAQ
            </h3>

            <h2 className="text-center text-xl sm:text-3xl text-white font-bold sm:px-4">
                Frequently Asked Questions
            </h2>

            <p className="my-6 mx-auto max-w-lg md:max-w-2xl text-center text-md sm:text-xl font-medium text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
            </p>

            <div className="px-2 sm:px-6 md:px-20 mt-16 sm:mt-20 md:mt-[5.5rem]">
                <Accordion
                    className="space-y-8"
                    type="single"
                    collapsible
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-sm sm:text-lg bg-gradient-to-r from-cyan-600 via-blue-800 to-purple-700 px-5 py-5 rounded-full">
                            How do I create an Gameon account?
                        </AccordionTrigger>

                        <AccordionContent className="my-5 mx-5 text-sm sm:text-lg">
                            {`The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.`}
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-sm sm:text-lg bg-gradient-to-r from-cyan-600 via-blue-800 to-purple-700 px-5 py-5 rounded-full">
                            Where can I see transaction details?
                        </AccordionTrigger>

                        <AccordionContent className="my-5 mx-5 text-sm sm:text-lg">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-sm sm:text-lg bg-gradient-to-r from-cyan-600 via-blue-800 to-purple-700 px-5 py-5 rounded-full">
                            How do royalties work on Gameon?
                        </AccordionTrigger>

                        <AccordionContent className="my-5 mx-5 text-sm sm:text-lg">
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-sm sm:text-lg bg-gradient-to-r from-cyan-600 via-blue-800 to-purple-700 px-5 py-5 rounded-full">
                            How do I list an NFT to sell?
                        </AccordionTrigger>

                        <AccordionContent className="my-5 mx-5 text-sm sm:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-sm sm:text-lg bg-gradient-to-r from-cyan-600 via-blue-800 to-purple-700 px-5 py-5 rounded-full">
                            How do I create an NFT?
                        </AccordionTrigger>

                        <AccordionContent className="my-5 mx-5 text-sm sm:text-lg">
                            {`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
};

export default FAQ;