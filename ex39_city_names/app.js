// function city_country(city:string,country:string) {
//     return` ${city} ${country}`
// }
// console.log(city_country("lahore","pakistan"));
// console.log(city_country("sharjah","dubai"));
// console.log(city_country("manama","bahrain"));
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
