// describe an object, naming and parameterizing the object's types, 
// and to compose existing named object types into new ones

interface e {
    firstName: string;
    lastName: string;
    fullName(): string;
}

let emp: e = {
    firstName : "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

//Type alias
// A definition of a type of data, for example, 
// a union, primitive, intersection, tuple, or 
// any other type. Interfaces, on the other hand, are a way 
// to describe data shapes, for example, an object.


//Type aliases can act like interfaces
//Difference between type alias and interface is that, an interface
//can always be reopened to add new properties. 
//A type alias cannot be reopened like that

type Employee1 = {
    firstName: string;
    lastName: string;
    fullName(): string;
}


interface IceCream {
    flavor: string,
    scoops: number
}

let myIceCream : IceCream = {
    flavor : "vanilla",
    scoops : 2
}

function tooManyScoops(a : IceCream){
    if(a.scoops>4){
        return a.scoops + " " + "is too many scoops";
    }else{
        return "hmm";
    }
}

console.log(tooManyScoops({flavor : "vanilla", scoops : 3}));

interface sundae extends IceCream {
    sauce : 'chocolate' | 'caramel' | 'strawbery';
    nuts? : boolean;
    whippedcream? : boolean;
    instructions? : boolean;
}

interface IceCreamArray {
    [index: number]: string;
}

let my: IceCreamArray;
my = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = my[0];
console.log(myStr);


//Describe a javascript API using an interface

const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();