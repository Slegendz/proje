import getAllPosts from "@/lib/getAllPosts";
import type post from "@/type/post";
import Link from "next/link";
import PostCards from "./PostCards";

export default async function UserPosts({
  params,
}: {
  params: { userId: number };
}) {
  const { userId } = await params;

//   const posts: Promise<post[]> = getAllPosts();
  const allPosts: post[] = await getAllPosts();

  const userPosts: post[] = allPosts.filter((post) => {
    if (post.userId == userId) return post;
  });

  console.log(userPosts);

  return (
    <div className="flex flex-col p-10 min-h-screen items-center justify-center text-xl bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl"> Users </h1>

      <Link href="/users" className="bg-blue-400 rounded-xl p-4 m-6 font-bold">
        {" "}
        GO TO Users{" "}
      </Link>

      <div className="grid grid-cols-2">
        {userPosts.map((post: post, index: number) => {
          return <PostCards post={post} key={index} />;
        })}
      </div>
    </div>
  );
}
