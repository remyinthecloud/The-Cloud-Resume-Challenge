window.addEventListener('DOMContentLoaded', (event) => {
    updateCounter();
})
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://nxvtfqdljcrvm4tn4tv4snjppa0yylyn.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}