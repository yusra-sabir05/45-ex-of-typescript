let guests=["shahruk khan","salman khan","amir khan"]
guests.forEach(guest => {
    console.log(`hello Mr,${guest}, I would like to invite you at a dinner party`)
});
// Qno:15

//unavaliable to attend

let UnableToAttend="amir khan"
console.log(`${UnableToAttend} unable to attend a dinner party`)


// replacing the guest

let newguest="rabir kappoor"
guests[guests.indexOf(UnableToAttend)]=newguest


// new invitation

guests.forEach(guest =>{
    console.log(`hello Mr,${guest}i would like to invite you at a dinner party`)
})