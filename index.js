function signup(){
    var email = document.getElementById("email").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        console.log("Email: " + email + ", Interest: " + document.getElementById("interests").value);
        return (true);
    }
    var error = document.getElementById("error");
    while (error.firstChild) {
        error.removeChild(error.firstChild);
    }
    var para = document.createElement("p");
    var text = document.createTextNode("Please enter a valid email address.");
    para.appendChild(text);
    document.getElementById("error").appendChild(para);
    return (false);
}