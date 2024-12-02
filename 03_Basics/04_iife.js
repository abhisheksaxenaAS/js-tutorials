//immediately invoked function expression(IIFE)

(function dbConnection() {
    console.log("DB Connected");
})();
//we use it avoid the problem risen up by globale variable pollution

((name) => {
    console.log(`${name}, DB-1 Connected `);
})('Abhishek')