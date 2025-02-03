import type {Config} from "tailwindcss";

// @ts-ignore
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                "pop-blob": {
                    "0%": {transform: "scale(1)"},
                    "33%": {transform: "scale(1.2)"},
                    "66%": {transform: "scale(0.8)"},
                    "100%": {transform: "scale(1)"},
                },
            },
            animation: {
                "pop-blob": "pop-blob 5s infinite",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                filter: {
                    "blur-20": "blur(20px)",
                    "blur-25": "blur(25px)",
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
