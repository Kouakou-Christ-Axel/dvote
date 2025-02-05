"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

export default function Elections() {
    return (
        <div className="my-container py-4 flex-1 flex flex-col items-center">
            <h1 className="text-4xl mb-2 mt-4">Votez pour le Changement</h1>
            <p className="text-lg text-gray-500 max-w-xl text-center">
                Instaurer la transparence et l’anonymat dans le processus électoral, c’est construire la démocratie de demain.
            </p>
            <motion.button
                className="bg-violet-600 text-white px-4 py-2 mt-4 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Nouvelle élection
            </motion.button>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 w-full">
                <div className="flex items-center bg-gray-100/90 pl-4 py-1 rounded-lg">
                    <div className='flex-1'>
                        <h2 className="text-xl mb-2">Élection présidentielle</h2>
                        <p className="text-gray-500">Votez pour le prochain président</p>
                    </div>
                    <Image src="/election.jpg" width={230} height={180} className="rounded-lg" alt="Élection présidentielle" />
                </div>
            </div>
        </div>
    )
}