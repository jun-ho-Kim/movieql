export const HorangFriend = [
    {
        id: "0",
        name : "Horangee",
        age: 22,
        gender : "male"
    },
    {
        id: "1",
        name : "Tokki",
        age : 24,
        gender : "femail",
    },
    {
        id: "2",
        name : "strawberry",
        age: 24,
        gender: "femail"
    }
];

export const getById = id => {
    const filteredPeople = HorangFriend.filter(person => person.id === String(id));
    return filteredPeople[0];
}