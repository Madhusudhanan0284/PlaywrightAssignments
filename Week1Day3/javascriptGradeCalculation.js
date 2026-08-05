function studentScore(marks){
    switch (true) {
        case (marks >= 75):
            console.log("Student passed with distinction");
            break;
            
            case (marks >= 60 && marks < 75):
                console.log("Student passe in First Class");
                break;

                case (marks < 60):
                    console.log("Student passed in Second Class");
                    break;
        default:
            console.log("Enter Student mark");            
            break;
    }
}
studentScore(59)