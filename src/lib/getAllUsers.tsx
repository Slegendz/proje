export async function getAllUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if(!res.ok){
        throw new Error("Something went wrong")
    }
    const users = await res.json();
    return users;
}