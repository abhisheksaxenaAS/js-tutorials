const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task (db calls, cryptography,network calls)
    setTimeout(function () {
        console.log("Async task is completed");
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");

})

new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log("Async task2 completed");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async2 resolved");

})