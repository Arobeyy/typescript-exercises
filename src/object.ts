//const User = {
//  name: "su",
//  email: "s@s.dev",
//  isActive: true,
//};

//function createUser({ name: string, isPaid: boolean }) {}
//createUser({ name: "hri", isPaid: true });


// returns an object
//function createCourse(): {name: string, price: number} {
//  return {name: "typeScript", price: 399}
//}

type User = {
  name: string;
  email: string;
  isActive: boolean
}

function createUser(user: User): User {
  return user;
}

createUser({name: '', email: "", isActive: true});