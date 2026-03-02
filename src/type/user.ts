type userAddress = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}

type userCompany = {
    name: string,
    catchPhrase: string,
    bs: string
}

type user = {
    id: string,
    name: string,
    username: string,
    email: string,
    address: userAddress,
    phone: string,
    website: string,
    company: userCompany
}

export default user;

