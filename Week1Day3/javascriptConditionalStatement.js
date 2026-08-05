function launchBrowser(){
    var browserName = "Safari"
    if(browserName === "Chrome"){
        console.log("Browser name is Chrome");        
    }
    else{
        console.log("Browser name is not Chrome");
        
    }
}
launchBrowser()

function runTests(){
    var testType = 'sanity'
    switch (testType) {
        case 'smoke':
            console.log("Test Type is Smoke");
            break;
            
            case 'sanity':
                console.log("Test Type is Sanity");
                break;

                case 'regression':
                    console.log("Test Type is Regression");
                    break;
        default:
            console.log("Test Type is Smoke");
            break;
    }
}
runTests();