const users = [
    {name: 'Антон', age: 24},
    {name: 'Аскар', age: 22},
    {name: 'Дмитрий', age: 16},
    {name: 'Татьяна', age: 17},
    {name: 'Екатерина', age: 24}
];

const adults = users.filter(user => user.age >= 18);
const adultsName = adults.map(user => user.name);

console.log(adultsName);
