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
//# sourceMappingURL=function.js.map