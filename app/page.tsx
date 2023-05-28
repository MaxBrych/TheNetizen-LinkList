"use client";
import LinkList from "@/components/LinkList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-white ">
      <div className="flex flex-col items-center w-full max-w-sm min-h-screen">
        <Image
          className="w-20 h-20 mt-6 mb-2 border border-gray-300 rounded-full "
          src="https://cdn.discordapp.com/attachments/911669935363752026/1112494062331760670/TheNetizen.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <h1 className="text-xl font-bold tracking-tight text-center text-gray-900 ">
          The Netizen
        </h1>
        <p className="mb-5 text-sm font-medium text-center text-gray-600">
          Links to helpful resources for Netizens.
        </p>
        <LinkList />
      </div>
    </main>
  );
}
