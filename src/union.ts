let score: number | string = 33;

score = 44;
score = "55";

type User1 = {
  name: string;
  id: number;
};

type Admin1 = {
  username: string;
  id: number;
};

let su: User1 | Admin1 = { name: "su", id: 59 };
su = { username: "aro", id: 34 };

function getDbId(id: number | string) {
  console.log(`DB id is: ${id}`);
  if (typeof id === "string") {
    id.toLowerCase();
    console.log(id);
  }
}

getDbId(3);
getDbId("3");

//array

const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];
const data3: (number | string)[] = [1, "2", 3, 4];

let pi:3.14 = 3.14;
// pi = 3.145;

//only get these 3 values can be chossen
let seatAllotment : 'aisle' | 'middle' | 'window';
seatAllotment = 'aisle'
//seatAllotment = 'crew'
