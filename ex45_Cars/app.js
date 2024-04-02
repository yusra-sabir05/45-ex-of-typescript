"use strict";
// function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
//   let car : { [key: string]: any } ={ manufacturer, model };
//   options.forEach(([key, value]) => car[key]= value);
//   return car;
// }
// console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
// console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
// function make_car(manufacturer:string,model:string, ...options:[string,any][]): Object {
//   let car:{[key:string]:any} ={manufacturer,model}
//   options.forEach(([key,value])=> car[key]=value)
//   return car
// 1922 Gardner Roadster
// honda civic sumroof
// Toyota Land Cruiser 
// function make_car(manufacturer:string,model:string, ...options:[string,any][]):Object {
//   let car:{[key:string]:any} ={manufacturer,model}
//   options.forEach(([key,value])=> car[key] = value)
//     return car
//   }
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("honda", "civic", ["color", "red"], ["year", 2017]));
console.log(make_car("toyota", "land cruiser", ["color", "red"], ["sunroof", false]));
