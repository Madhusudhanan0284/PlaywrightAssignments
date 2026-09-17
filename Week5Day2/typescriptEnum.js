//1. Create an enum named `Environment` with four values representing different stages of a software development process: 
// `LOCAL`, `DEVELOPMENT`, `STAGING`, `PRODUCTION`. 
// 2. Write a function named `runTests` that accepts an argument of type `Environment`. 
// The function should print a message indicating the environment against which the tests are running. 
// 3. The function `runTests` should be specified to return `void`, highlighting that it does not return any data. 
// 4. Include example calls to `runTests` using different enum values to demonstrate the function's functionality. 
var environment;
(function (environment) {
    environment[environment["LOCAL"] = 0] = "LOCAL";
    environment[environment["DEVELOPMENT"] = 1] = "DEVELOPMENT";
    environment[environment["STAGING"] = 2] = "STAGING";
    environment[environment["PRODUCTION"] = 3] = "PRODUCTION";
})(environment || (environment = {}));
function runTests(result) {
    console.log("Environment is in ".concat(result));
}
runTests(environment.DEVELOPMENT);
runTests(environment.LOCAL);
runTests(environment.STAGING);
runTests(environment.PRODUCTION);
