import { getAllUsers } from "@/lib/getAllUsers";
import type userDetails from "@/type/user";
import UserCards from "./UserCards";
import Link from "next/link";

export default async function Users() {
  const users: Promise<userDetails[]> = getAllUsers();
  const allusers: userDetails[] = await users;

  return (
    <div className="flex flex-col p-10 min-h-screen items-center justify-center text-xl bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl"> Users </h1>

      <Link href="/" className="bg-blue-400 rounded-xl p-4 m-6 font-bold hover:bg-purple-500 ease-in-out transition duration-500 hover:transform hover:scale-90 hover:duration-500">
        {" "}
        GO TO HOME{" "}
      </Link>

      <div className = "grid grid-cols-1 md:grid-cols-2">
        {allusers.map((user: userDetails, index: number) => {
          return <UserCards user={user} key={index} />;
        })}
      </div>
    </div>
  );
}
