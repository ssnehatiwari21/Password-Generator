let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
let passBox=document.getElementById("passBox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let genbtn=document.getElementById("genbtn");
let copyIcon=document.getElementById("copyIcon");


//Showing input slider value
sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener('input',()=>{   
    sliderValue.textContent=inputSlider.value;
});

genbtn.addEventListener('click',()=>{
    passBox.value=generatePassword();

})

let lowerChars="abcdefghijklmnopqrstuvwxyz";
let allNumbers="0123456789";
let allSymbols="!@#$%^&*"
let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Function to generate Password
function generatePassword(){
    let genPassword="";
    let allChars="";
    allChars+=lowercase.checked ? lowerChars:"";
    allChars+=uppercase.checked ? upperChars:"";
    allChars+=numbers.checked ? allNumbers:"";
    allChars+=symbols.checked ? allSymbols:"";
    if(allChars=="" || allChars.length==0){
        return genPassword;
    }

    let i=1;
    while(i<=inputSlider.value){
        genPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++;
    }
   
    return genPassword;
}

copyIcon.addEventListener('click',()=>{
    if(passBox.value !=""){
        navigator.clipboard.writeText(passBox.value)
        copyIcon.title="Password Copied";
        copyIcon.innerText = "✔";

        setTimeout(()=>{
            copyIcon.innerHTML="content_copy";
            copyIcon.title="";

        },2000)
    }
    
})


