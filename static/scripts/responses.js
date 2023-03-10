function getBotResponse(input) {
    if(input == 001){
        return "What is your problem?";
    }
    else if(input == "missing accessories"){
        return "add more description"
    } else if (input=="missing earphones"){
        return "Ok. How can we help you ?"
    } else if(input == "can i return?"){
        return "enter your product id"
    }
    else if(input == 006){
        return "return product or cancel request"
    }
    else if(input == "return product"){
        return "Enter your details"
    }
    else{
        return "enter proper details.."
    }
    
}
    

    // Simple responses
    // if (input == "hello") {
    //     return "Hello there!";
    // } else if (input == "goodbye") {
    //     return "Talk to you later!";
    // } else {
    //     return "Try asking something else!";
    // }
