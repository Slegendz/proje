export default async function getAllPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if(!res.ok){
        throw new Error("Something went wrong")
    }
    const posts = await res.json();
    return posts;
}
