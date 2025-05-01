"use strict";
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("su");
function signUpUser(name, email, isPaid) {
    console.log("name:", name);
    console.log("email:", email);
    console.log("paid", isPaid);
}
signUpUser("su", "su@mail.com", false);
let loginUser = (name, email, isPaid = false) => {
    console.log("name:", name);
    console.log("email:", email);
    console.log("paid", isPaid);
};
loginUser("su", "s@s");
function getValue(val) {
    if (val > 5) {
        return true;
    }
    return "200 ok";
}
console.log(getValue(4));
const getHello = (s) => {
    return s;
};
console.log(getHello("hi"));
const heros = ["bunny", "cheeseCake", "cookie"];
heros.map((hero) => {
    return `hero is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
//# sourceMappingURL=function.js.map