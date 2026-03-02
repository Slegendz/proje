"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  let val = "Get Users";
  const [content, setContent] = useState<string>(val);

  const changeContent = () => {
    setContent(`${val} :)`);
  };

  const redoContent = () => {
    setContent(val);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-xl bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl">HOME PAGE</h1>

      <Link
        href="/users"
        className="bg-blue-400 rounded-xl p-4 m-6 font-bold hover:bg-purple-500 ease-in-out transition duration-500 hover:transform hover:scale-90 hover:duration-500"
        onMouseEnter={changeContent}
        onMouseLeave={redoContent}
      >
        {content}
      </Link>
    </div>
  );
}
