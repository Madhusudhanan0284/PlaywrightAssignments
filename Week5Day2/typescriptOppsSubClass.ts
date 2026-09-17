import { LoginPage } from './typescriptOopsClass';

// Create object of LoginPage class in another file
const loginPage = new LoginPage("https://platform.testleaf.com/#/login");

// Execute methods and access properties
console.log(`Launching URL: ${loginPage.url}`);
loginPage.login();
loginPage.logout();