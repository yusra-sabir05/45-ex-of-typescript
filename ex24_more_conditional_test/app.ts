

            // equali'ty test with stings(===)
console.log("testing equality with stings")
let fruit1=("banana")
let fruit2=("Banana")
           // testing true condition
console.log(fruit1===fruit1)
console.log(fruit2===fruit2)
          // testing false condition
console.log(fruit1===fruit2)
console.log(fruit2===fruit1)


        //    unequality test with strings(!==)
console.log("testing unequality with strings")
let name1=("yusra")
let name2=("Yusra")

        //    testing true condition
console.log(name1!==name2)
console.log(name2!==name1)

        // testing false condition

console.log(name1!==name1)
console.log(name2!==name2)
  

             //using the lower case function
console.log("using the lower case function")
let alpha1=("book")
let alpha2=("Book")
        // testing true condition
 console.log(alpha1.toLowerCase()==alpha1)
console.log(alpha2.toLowerCase()==alpha1)
        // testion false condition
        console.log(alpha1.toLowerCase()==alpha2)
        console.log(alpha2.toLowerCase()==alpha2)

        // another simplest way to print this out

console.log("simplest way")
        // in true condition
console.log('Yusra'.toLowerCase()=='yusra')

//        in false condition

console.log("yusra".toLowerCase()=="Yusra")

        //       testing the upper case condition

        console.log("testing the upper case condition")
        let vari1=("laptop")
        let vari2=("LAPTOP")
        // uppercase in true conditon
        console.log(vari1.toUpperCase()==vari2)
        console.log(vari2.toUpperCase()==vari2)
        // uppercase in false condition
        console.log(vari2.toUpperCase()==vari1)
        console.log(vari1.toUpperCase()==vari1)
        //    the simplest way
        console.log("the simplest way of uppercase condition")
        console.log("laptop".toUpperCase()=="LAPTOP")
        console.log("LAPTOP".toUpperCase()=="laptop")
            

        //   Numerical tests involving equality and inequality, greater than and less than, greater than or equal to ,less then and equal to

         // numerical test involving equality
         console.log("number involving equality")
        let num1=("5")
        let num2=("3")
        // in true condition
        console.log(num1==num1)
        console.log(num2==num2)
        // in false condition
        console.log(num1==num2)
        console.log(num2==num1)

        // simplest way
        console.log("simplest way")
        console.log("5"=="5")
        console.log("3"== "3")

        // numerical test involving inequality
        console.log("number involving inequality")
        let num3=("6")
        let num4=("7")

        // in true condition
        console.log(num3!==num4)
        console.log(num4!==num3)
        // in false condition
        console.log(num3!==num3)
        console.log(num4!==num4)
        // simplest way
        console.log("simplest way")
        console.log("8" !== "8")

        // numerical test involving greater then
        console.log("greater then")
        let cm1=(5)
        let cm2=(8)

        // in true condition
        console.log(cm2>cm1)

        // in false condition
        console.log(cm1>cm2)

        // in less then condition
        console.log("in less then condition")
        let cm3=(7)
        let cm4=(9)

        // in true condition
        console.log(cm1<cm4)

        // in false condition

        console.log(cm4<cm3)

        // greater then and equal too
        console.log("greater then and equal to")
        let nm1=("67")
        let nm2=("6")
        // in true condition
        console.log(nm1>=nm2)
        // in false condition
        console.log ("greater then and equal to in false")
         console.log(nm2>=nm1)

        // less then and equal to
        console.log("less then and equal to")
        let nm3=("54")
        let nm4=("78")
        // in true condition
        console.log(nm3<=nm4)

        // in false condition
        console.log("less then and equal to in false condition")
        console.log(nm4<=nm3)
        


        // logical operators and(&&) or(||)
        // and operator
        console.log("and operators")
        let a=('true')
        let b=('false')
        // (true conditiion) in and it returns true if both side asre true otherwise it returns false
        
console.log("Tests with 'and' true condition");
console.log(a && a); 
           // and false condition
console.log("test with and false condition")
console.log(a && b);

     //or operators
//      (true condition ) in or it returnd false if both sides of condition i false otherwise it returns true
console.log("or operators true condition")
console.log(a || b)
//        false condition
console.log("false condition in or operators")
console.log(b || b)

// // Test whether an item is in a array
console.log("Test whether an item is in a array")
let boys=["manan","haadi","hussain shah"]
      // in true condition
      console.log("in ture condition")
      console.log("is 'haadi' in the school?")
      console.log(boys.includes('haadi'))
//       in false condition
console.log("in false condition")
console.log("is 'wahab' in the school?")
console.log(boys.includes("wahab"))

// Test whether an item is not in a array
console.log(" Test whether an item is not in a array")
let girls=["yusra","tayyaba","hoor"]
// in true condition
console.log("in true condition")
console.log("is 'hamna' in the party?")
console.log(!girls.includes("hamna"))
// in false condition
console.log("in true codition")
console.log("is 'hoor' in the party?")
console.log(!girls.includes("hoor"))



        
