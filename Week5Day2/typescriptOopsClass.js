"use strict";
// classroom 1:
// Create class as LoginPage
// property as Url, with parameterized dataTitle with a value
// methods as Login() and Logout()
// create the Parameterized constructor (Url:string)
// create object inside the same file and execute 
// Create another file and call the LoginPage.
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
var LoginPage = /** @class */ (function () {
    // Parameterized Constructor
    function LoginPage(url) {
        this.dataTitle = "Login Page Title";
        this.url = url;
    }
    // Methods
    LoginPage.prototype.login = function () {
        console.log("Navigating to login page");
    };
    LoginPage.prototype.logout = function () {
        console.log("Logging out");
    };
    return LoginPage;
}());
exports.LoginPage = LoginPage;
// Instantiate object inside the same file and execute
var parentLoginPage = new LoginPage("https://example.com/login");
console.log("Title: ".concat(parentLoginPage.dataTitle));
parentLoginPage.login();
parentLoginPage.logout();
