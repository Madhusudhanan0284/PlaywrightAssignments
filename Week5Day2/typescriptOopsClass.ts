// classroom 1:
// Create class as LoginPage
// property as Url, with parameterized dataTitle with a value
// methods as Login() and Logout()
// create the Parameterized constructor (Url:string)
// create object inside the same file and execute 
// Create another file and call the LoginPage.

export class LoginPage {
    // Properties
    url: string;
    dataTitle: string = "Login Page Title";

    // Parameterized Constructor
    constructor(url: string) {
        this.url = url;
    }

    // Methods
    public login(): void {
        console.log(`Navigating to login page`);
    }

    public logout(): void {
        console.log("Logging out");
    }
}

// Instantiate object inside the same file and execute
const parentLoginPage = new LoginPage("https://example.com/login");
console.log(`Title: ${parentLoginPage.dataTitle}`);
parentLoginPage.login();
parentLoginPage.logout();