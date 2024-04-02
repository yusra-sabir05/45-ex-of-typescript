var guests = ["shahruk khan", "salman khan", "amir khan"];
guests.forEach(function (guest) {
    console.log("hello Mr,".concat(guest, ", I would like to invite you at a dinner party"));
});
// Qno:15
//unavaliable to attend
var UnableToAttend = "amir khan";
console.log("".concat(UnableToAttend, " unable to attend a dinner party"));
// replacing the guest
var newguest = "rabir kappoor";
guests[guests.indexOf(UnableToAttend)] = newguest;
// new invitation
guests.forEach(function (guest) {
    console.log("hello Mr,".concat(guest, "i would like to invite you at a dinner party"));
});
