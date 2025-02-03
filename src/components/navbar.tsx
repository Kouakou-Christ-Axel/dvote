import React from 'react';
import Link from "next/link";
import {Icon} from "@iconify/react";

function Navbar() {
    return (
        <header className="bg-white backdrop-blur py-5 border-b">
            <div className="my-container flex justify-between items-center">
                <h1>
                    <Link href="/" className="font-bold text-2xl">
                        D-Vote
                    </Link>
                </h1>
                <nav className="flex items-center space-x-4">
                    <Link href="https://github.com/">
                        <Icon icon="ri:github-fill" className="size-7" />
                    </Link>
                    <Link href="https://github.com/">
                        <Icon icon="uil:linkedin" className="size-7" />
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;