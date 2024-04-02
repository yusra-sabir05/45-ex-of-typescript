



let current_users =["tayyaba","admin","yusra","hamna","rabia","Nayab"]
let news_user =["Yusra","arshiya","nayab","admin","Marvi"]

 news_user.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} needs to choose a new username`)
       
        }else{
          console.log(`${newUser} is avaliable`)
        }
 });          
