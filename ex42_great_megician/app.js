// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// let magicians: string[] = ["Alice", "David", "Chris"];
// function show_magicians(magicians: string[]) {
//   magicians.forEach((magician) => {
//     console.log(magician);
//   });
// }
// function make_great(magicians: string[]) {
//   for (let i = 0; i < magicians.length; i++) {
//     magicians[i] = magicians[i] + " the Great";
//   }
// }
// make_great(magicians); // Modifies the original array
// show_magicians(magicians); 
// let magicians=["Shin Lim","Harry Houdini","Derren Brown","David Copperfield",]
//  function show_magicians(magicians:string[]) {
//     magicians.forEach(magician => {
//         console.log(magician)
//     });
//  }
// function make_great(magicians:string[]) {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians [i] = magicians [i] +  "  the great  "
//     }
// }
// make_great(magicians)
// show_magicians(magicians)
//  Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// let magicians=["Shin Lim","Harry Houdini","Derren Brown","David Copperfield",]
// function show_magicians(magicians:string[]) {
//     magicians.forEach(magician => {
//         console.log(magician)
//     });
// }
// function make_great(magicians:string[]) {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = magicians[i]  + "  the great  "
//     }
// }
// // show_magicians(magicians)
// make_great(magicians)
// show_magicians(magicians)
var magicians = ["Shin Lim", "Harry Houdini", "Derren Brown", "David Copperfield",];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(Magicians) {
    for (var index = 0; index < magicians.length; index++) {
        magicians[index] = magicians[index] + " The great ";
    }
}
make_great(magicians);
show_magicians(magicians);
