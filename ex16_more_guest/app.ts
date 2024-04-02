// Qno:16

let guests=["salman khan","sharukh khan","amir khan"]
console.log("great news! I found a bigger dinner table")

// adding more guests
 guests.unshift("ranbir kapoor")
 guests.splice(guests.length/ 2,0,"mahesh bhatt")
 guests.push("vicky kaushal")

//  inviting them
guests.forEach(guest=>{
    console.log(`hello Mr.${guest} ,would you like to join me for dinner`)
})

