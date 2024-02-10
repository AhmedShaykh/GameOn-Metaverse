"use client";
import { useState } from "react";
import { NAV_ITEMS } from "@/static";
import Wrapper from "./Wrapper";
import { Button } from "@/Components/ui/button";
import { formatAddress } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useSDK } from "@metamask/sdk-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    const pathname = usePathname();

    const { sdk, connected, connecting, account } = useSDK();

    const connect = async () => {

        try {

            await sdk?.connect();

        } catch (err) {

            console.warn(`No Accounts Found`, err);

        }
    };

    const disconnect = () => {

        if (sdk) {

            sdk.terminate();

        }
    };

    return (
        <div className="bg-[#090A1A] w-full mx-auto px-8 sm:px-20 sticky top-0 z-50 shadow shadow-slate-900">
            <Wrapper>
                <div className="justify-between md:items-center md:flex">
                    <div>
                        <div className="flex items-center justify-between py-6 md:py-8 md:block">
                            <Link href={"/"}>
                                <Image
                                    src="https://theme-land.com/gamefi/assets/img/logo/logo.png"
                                    width={29}
                                    height={29}
                                    alt="logo"
                                />
                            </Link>

                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? <XMarkIcon className="h-6 w-6 text-white" /> : <Bars2Icon className="h-6 w-6 text-white" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}
                        >
                            <div className="flex flex-col items-center justify-center space-y-8 pb-4 md:pb-0 md:flex-row md:space-x-10 md:space-y-0 font-medium">
                                {NAV_ITEMS.map((item, idx) => {
                                    return (
                                        <Link
                                            key={idx}
                                            href={item.page}
                                            className={
                                                `block lg:inline-block ${item.page === pathname ? "text-blue-600" : "text-white"} hover:text-blue-600 cursor-pointer`
                                            }
                                            onClick={() => setNavbar(!navbar)}
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                })}

                                {connected ? (
                                    <Popover>
                                        <PopoverTrigger>
                                            <Button className="bg-gradient-to-r from-cyan-600 via-blue-800 to-purple-700 text-white p-5">
                                                {formatAddress(account)}
                                            </Button>
                                        </PopoverTrigger>

                                        <PopoverContent className="mt-8 bg-zinc-900 w-30 rounded-md shadow right-0 z-70 top-10 py-5 px-5">
                                            <Button
                                                className="text-center bg-[#F05252] hover:bg-[#F05252]"
                                                onClick={disconnect}
                                            >
                                                Disconnect
                                            </Button>
                                        </PopoverContent>
                                    </Popover>
                                ) : (
                                    <>
                                        <Button
                                            className="py-4 px-6 text-md rounded-full cursor-pointer bg-gradient-to-r from-cyan-600 via-blue-800 to-purple-700"
                                            disabled={connecting}
                                            onClick={connect}
                                        >
                                            Wallet Connect
                                        </Button>
                                    </>)}
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
};

export default Navbar;