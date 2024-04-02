"use strict";
// Qno:16
let guests = ["salman khan", "sharukh khan", "amir khan"];
console.log("great news! I found a bigger dinner table");
// adding more guests
guests.unshift("ranbir kapoor");
guests.splice(guests.length / 2, 0, "mahesh bhatt");
guests.push("vicky kaushal");
//  inviting them
guests.forEach(guest => {
    console.log(`hello Mr.${guest} ,would you like to join me for dinner`);
});
// Qno:17 | shrinking guest list
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
guests.splice(0, guests.length);
console.log(guests);
