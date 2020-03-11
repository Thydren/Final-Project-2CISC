let origin = document.getElementsByClassName("origin");

for (let i = 0; i < origin.length; ++i) {
    origin[i].addEventListener("click", originClick);
}

function originClick() {
    let displayText = document.getElementById("display");
    console.log(this.innerText + " button was clicked");
    if (displayText === '0') {
        
    }
}


