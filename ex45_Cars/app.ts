
function make_car(manufacturer:string,model:string, ...options:[string,any][]): Object {
  let car:{[key:string]:any} ={manufacturer,model}
  options.forEach(([key,value]) => car[key]= value)
  return car
}
console.log(make_car("honda","civic",["color","red"],["year",2017]))
console.log(make_car("toyota","land cruiser",["color","red"],["sunroof",false]))