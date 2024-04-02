

let magicians=["Shin Lim","Harry Houdini","Derren Brown","David Copperfield",]
function show_magicians(magicians:string[]) {
    magicians.forEach(magician => {
        console.log(magician)
    });
}

function make_great(Magicians:string[]) {
    for (let index = 0; index < magicians.length; index++) {
        magicians[index] = magicians[index] + " The great "
        
    }
}
make_great(magicians)
show_magicians(magicians)