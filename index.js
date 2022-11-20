// Stores the password element paragraph in a variable
let pass1El = document.getElementById("pass1-el")
let pass2El = document.getElementById("pass2-el")
let pass1div = document.getElementById("pass1")
let pass2div = document.getElementById("pass2")

// Declares the password length.
const chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = 15;



// Declares the function  that creates the password.
   
function generatepasswords(){
    //declares each password variable (empty)
    let password1 = ""
    let password2 = ""
    pass1El.innerHTML = ""
    pass2El.innerHTML = ""


    //Fills the password variable until it matches the passwordLength
    for(let i=0; i< passwordLength; i++){
        const randomIndex = Math.floor(Math.random()*chars.length);
        password1 += chars[randomIndex]
        
    }
    for(let i=0; i< passwordLength; i++){
        const randomIndex = Math.floor(Math.random()*chars.length);
        password2 += chars[randomIndex]
    }
    //Sets the variable to the Password Element in the HTML format.
    pass1El.textContent += password1
    pass2El.textContent+= password2
    
}    

  
function copyToClipboard() {
    var copyText = document.getElementById("pass1-el").value;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        alert("Copied to clipboard");
    });
    var copyText = document.getElementById("pass2-el").value;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        alert("Copied to clipboard");
    });
  }

