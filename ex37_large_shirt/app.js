"use strict";
function make_shirt(size = "xlarge", message = "I love typescript") {
    console.log(`making a ${size} shirt with the message ${message} printed on it`);
}
make_shirt();
make_shirt("large");
make_shirt("medium", "finding beauty in the simple things");
make_shirt("small", "Collecting moments, not thing");
