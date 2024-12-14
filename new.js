let promise = new Promise((resolve, reject) => {
    let sucess = true;
    if(sucess){
        resolve("Operation succesfully complete ho chuka haa");
    } else {
        reject("Operation failed");
    }
});

promise
 .then((result) => {
    console.log(result);
 })
 .catch((e) => {
    console.log(e);
 })
.finally(() => {
    console.log("kuch bhi ho mai to chalunga he");
})