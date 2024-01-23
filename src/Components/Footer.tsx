"use client";
import { useEffect, useState } from "react";
import { FOOTER_ITEMS } from "@/static";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {

        if (window.pageYOffset > 300) {

            setIsVisible(true);

        } else {

            setIsVisible(false);

        }
    };

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="w-full py-8">
            <div className="flex justify-center items-center">
                <Image
                    src="https://theme-land.com/gamefi/assets/img/logo/logo.png"
                    className="my-6"
                    width={40}
                    height={40}
                    alt="logo"
                />
            </div>

            <div className="flex flex-col items-center justify-center my-3 space-y-8 py-4 md:flex-row md:space-x-10 md:space-y-0 font-medium">
                {FOOTER_ITEMS.map((item, idx) => {
                    return (
                        <Link
                            key={idx}
                            href={item.page}
                            className={
                                "block lg:inline-block text-lg text-white hover:text-blue-500 cursor-pointer"
                            }
                        >
                            {item.label}
                        </Link>
                    )
                })}
            </div>

            <div className="my-9 flex justify-center items-center">
                <button
                    className="text-white p-2 bg-slate-900 hover:bg-blue-700 rounded-md"
                    onClick={scrollToTop}
                >
                    <ArrowUp
                        className="w-10 h-10 bg-slate-900 hover:bg-blue-700"
                    />
                </button>
            </div>
        </div>
    )
};

export default Footer;