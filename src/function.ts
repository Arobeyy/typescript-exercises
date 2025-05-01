function addTwo(num: number): number {
  return num + 2;
}
addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase();
}
getUpper("su");

function signUpUser(name: string, email: string, isPaid: boolean) {
  console.log("name:", name);
  console.log("email:", email);
  console.log("paid", isPaid);
}
signUpUser("su", "su@mail.com", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
  console.log("name:", name);
  console.log("email:", email);
  console.log("paid", isPaid);
};
loginUser("su", "s@s");

function getValue(val: number): boolean | string {
  if (val > 5) {
    return true;
  }
  return "200 ok";
}
console.log(getValue(4));

const getHello = (s: string): string => {
  return s;
};
console.log(getHello("hi"));

const heros = ["bunny", "cheeseCake", "cookie"];
heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
