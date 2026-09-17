//union type


//alias name for datatypes
//login scenario filling the username with email or mob number


type paymentMethod = "UPI" |"CreditCard" | "Paypal"
//userInput is the alias name of the 2 datatypes combined together

function makePayment(paymentType:paymentMethod){ //browserName is a local variable 
    //to fetch the argument value msedge into the function block


    console.log(paymentType);
}

makePayment('UPI')
makePayment('CreditCard')
makePayment("Paypal")