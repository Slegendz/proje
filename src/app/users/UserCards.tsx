"use client";

import userDetails from "@/type/user";
import Link from "next/link";

export default function UserCards({ user }: { user: userDetails }) {
  const userImage = "https://tse1.mm.bing.net/th/id/OIP.srNFFzORAaERcWvhwgPzVAHaHa?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3";

  return (
    <div className="flex flex-col gap-3 bg-emerald-500 w-70 sm:w-100 md:w-120 m-4 p-8 rounded-4xl justify-center items-center text-[16px] md:text-xl">
      <div className="flex flex-col gap-3 justify-center items-center font-bold">
        <img src={userImage} alt="User" className = "rounded-[50%] w-40 h-40 m-4" />
        <p> Id: {user.id} </p>
        <p> Name: {user.name} </p>
        <p> Email: {user.email} </p>
        <p> Username: {user.username} </p>
      </div>

      <Link
        href={`/users/${user.id}`}
        className="bg-yellow-400 text-center rounded-xl p-4 m-6 font-bold max-w-50 hover:bg-rose-300 ease-in-out transition duration-500 hover:transform hover:scale-90 hover:duration-500"
      >
        Get User Posts
      </Link>
    </div>
  );
}
