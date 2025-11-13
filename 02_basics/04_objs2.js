// const beyondEr = new Object()// singleton object
const beyondEr = {};//on-singleton object
beyondEr.id = "6996"
beyondEr.name = "Grey"
beyondEr.isLoggedIn = false

// console.log(beyondEr); 

const regUser = {
    email: "grey@gmail.com",
    f_name: {
        userName: {
            FirstName: "Grey",
            SecName: "Hound"
        }
    }
}

// console.log(regUser.f_name?.userName.FirstName);

const o1 = {1: "A", 2:"B"}
const o2 = {3: "c", 4:"d"}

// const o3 = {o1, o2}
// const o3 = Object.assign({}, o1, o2)
const o3 = {...o1, ...o2}
// console.log(o3);

const users = [
    {
        id: 1, 
        email: "k@gmail.com"
    },{
        id: 1, 
        email: "k@gmail.com"
    }
]

users[1].email
console.log(Object.keys(beyondEr));
console.log(Object.entries(beyondEr));
console.log(beyondEr.hasOwnProperty('isLogged'));



