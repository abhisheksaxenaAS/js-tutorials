//const WhatsappUser = new Object()  //Singleton object

const WhatsappUser = {}              //Non-singleton object
WhatsappUser.Id = 123
WhatsappUser.Name = "ABC"
WhatsappUser.IsLoggedIn = false

//console.log(WhatsappUser)

const RegularUser = {
    email: "user1@gmail.com",
    fullName: {
        userName: {
            firstName: "Abhishek",
            lastName: "Saxena"
        }
    }
}
// console.log(RegularUser.fullName);
//console.log(RegularUser.fullName.userName.firstName);


const obj1 = { 1: "Abhi", 2: "Saxena" }
const obj2 = { 3: "Three", 4: "Four" }

// const obj3 = { obj1, obj2 }
// console.log(obj3);

//const obj4=Object.assign({},obj1,obj2)


const obj5 = { ...obj1, ...obj2 } //latest method to assign and widely used
//console.log(obj5)


const users = [
    {
        id: 1,
        email: "1@gmail.com"
    },
    {

    },
    {

    }
]

console.log(users[0].email);


//console.log(WhatsappUser)
//console.log(Object.keys(WhatsappUser));
//console.log(Object.values(WhatsappUser));
//console.log(Object.entries(WhatsappUser));

//console.log(WhatsappUser.hasOwnProperty("IsLoggedIn"));


