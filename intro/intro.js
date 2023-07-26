function clickButton() {
    console.log(`Hello world!`);
    const mytext = document.getElementById("mytext");
    mytext.innerHTML = `It worked!`;
    
    const body = document.body;
    body.style = `background-color: red`;
}