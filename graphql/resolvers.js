const horangee = {
    name: "junhorangee",
    age: 22,
    gender: "male"
}

const resolvers = {
    Query : {
        person: () => horangee
    }
}

export default resolvers;