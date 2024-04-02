var current_users = ["tayyaba", "admin", "yusra", "hamna", "rabia", "Nayab"];
var news_user = ["Yusra", "arshiya", "nayab", "admin", "Marvi"];
news_user.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " needs to choose a new username"));
    }
    else {
        console.log("".concat(newUser, " is avaliable"));
    }
});
