const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://o9h7o4om9j.execute-api.us-east-1.amazonaws.com/Origin/visitorCounter");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}
updateCounter();