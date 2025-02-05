"use client";

import BlurryBlob from "@/components/animata/background/blurry-blob";
import { ArrowRight } from "lucide-react";
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import Image from "next/image";
import HeroButton from "./button";
import { generateKeyPair } from "@/lib/crypto";

const words = [
    "sécurisées",
    "transparentes",
    "incorruptibles",
    "fiables"
];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000); // Change every 3s
        return () => clearInterval(interval);
    }, []);

    const ctaClick = () => {
        const { privateKey, address } = generateKeyPair();

        // save the private key in local storage
        localStorage.setItem("privateKey", privateKey);
        localStorage.setItem("address", address);
    }

    return (
        <main className="my-container overflow-x-hidden relative flex-1 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left lg:justify-between py-8">
            <div>
                <h1 className="transition-all duration-300 text-3xl sm:text-4xl md:text-6xl font-bold max-w-2xl leading-8">
                    Les élections de demain seront {" "}
                    <br/>
                    <motion.div
                        key={words[index]}
                        className="text-violet-600 inline-block"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.8 }}
                    >
                        {words[index]}
                    </motion.div>
                </h1>
                <p className="mt-4 text-lg text-gray-500 max-w-xl">
                    Chaque vote est enregistré de manière inaltérable sur la blockchain, garantissant des élections justes et transparentes.
                </p>
                <div className="mt-8">
                    <HeroButton
                        handleClick={ctaClick}
                    />
                </div>
            </div>
            <div className="relative min-w-[50%] flex-1 flex flex-col items-center justify-center mt-8 lg:mt-0">
                <div className="absolute top-2/3 left-1/3">
                    <BlurryBlob
                        className="rounded-xl opacity-45"
                        firstBlobColor="bg-violet-400"
                        secondBlobColor="bg-yellow-400"
                    />
                </div>
                <Image
                    src="/voting.svg"
                    alt="Illustration d'une élection"
                    width={750}
                    height={750}
                    layout="intrinsic"
                    className="bg-white"
                />
            </div>
        </main>
    );
}