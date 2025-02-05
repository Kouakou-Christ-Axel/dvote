import { ArrowRight } from "lucide-react";

export default function HeroButton({handleClick}:{handleClick?: () => void}) {
    return (
        <button
            className={`group relative rounded-full border border-white bg-white p-2 text-xl font-semibold`}
            onClick={handleClick}
        >
            <div
                className="absolute left-0 top-0 flex h-full w-11 items-center justify-end rounded-full transition-all duration-200 ease-in-out group-hover:w-full bg-violet-600"
            >
                <span className="mr-3 text-white transition-all duration-200 ease-in-out">
                    <ArrowRight size={20} />
                </span>
            </div>
            <span className="relative left-4 z-10 whitespace-nowrap px-8 font-semibold text-black transition-all duration-200 ease-in-out group-hover:-left-3 group-hover:text-white">
                C'est parti
            </span>
        </button>
    )
}