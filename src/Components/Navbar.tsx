"use client";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
    label: string
    page: string
};

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        page: "#"
    },
    {
        label: "Projects",
        page: "#"
    },
    {
        label: "Staking",
        page: "#"
    },
    {
        label: "Pages",
        page: "#"
    }
];

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    return (
        <header className="w-full mx-auto px-8 sm:px-20 sticky top-0 z-50 shadow shadow-gray-500 dark:shadow-slate-50">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-6 md:py-8 md:block">
                        <Image
                            src="https://theme-land.com/gamefi/assets/img/logo/logo.png"
                            width={29}
                            height={29}
                            className="dark:red"
                            alt="logo"
                        />

                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? <XMarkIcon className="h-6 w-6 dark:text-white" /> : <Bars2Icon className="h-6 w-6 dark:text-white" />}
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-x-12 md:space-y-0 font-medium">
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        href={item.page}
                                        className={
                                            "block lg:inline-block text-neutral-900 dark:text-white cursor-pointer"
                                        }
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            })}
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Navbar;