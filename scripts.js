const counter = document.querySelector(".visitorCounter") 
async function updateCounter(){

    let response = await fetch("https://o9h7o4om9j.execute-api.us-east-1.amazonaws.com/visitorCounter");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();