import BlurryBlob from "@/components/animata/background/blurry-blob";

export default function Home() {
    return (
        <main className="relative flex-1 flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold">
                Bienvenue sur D-Vote
            </h1>
            <p className="text-xl mt-4 text-center">
                A decentralized voting platform
            </p>

            <BlurryBlob
                className="rounded-xl opacity-45"
                firstBlobColor="bg-green-400"
                secondBlobColor="bg-yellow-400"
            />
        </main>
    );
}
