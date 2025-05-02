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

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean
// }

// function createUser(user: User): User {
//   return user;
// }

// createUser({name: '', email: "", isActive: true});

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  craditCardDetails?: number;
};

let myUser: User = {
  _id: "1234",
  name: "su",
  email: "s@s.com",
  isActive: false,
};

myUser.email = "s@gmail.com";
//myUser._id = "456";

type cardNumber = {
  cardNum: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
 