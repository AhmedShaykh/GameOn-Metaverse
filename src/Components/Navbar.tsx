"use client";
import { useState } from "react";
import { NAV_ITEMS } from "@/static";
import ConnectWallet from "./ConnectWallet";
import Wrapper from "./Wrapper";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    const pathname = usePathname();

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

                                <ConnectWallet />
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
};

export default Navbar;