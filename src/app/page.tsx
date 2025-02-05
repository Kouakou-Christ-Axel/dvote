"use client";
import Hero from "@/components/hero";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const pk = localStorage.getItem("privateKey")
        if (pk) {
            // Redirect to the dashboard if the user is already logged in
            redirect("/elections");
        }

    }, []);

    return (
        <>
            <Hero/>
        </>
    );
}
