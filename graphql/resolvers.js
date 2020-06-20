import {HorangFriend, getById} from "./db";

const resolvers = {
    Query : {
        people: () => HorangFriend,
        person: (_, {id}) => getById(id)
    }
};

export default resolvers;