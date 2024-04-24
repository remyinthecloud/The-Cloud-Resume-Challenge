const counter = document.querySelector(".counter-number")
    let response = await fetch("https://nxvtfqdljcrvm4tn4tv4snjppa0yylyn.lambda-url.us-east-1.on.aws/")
    let data = await response.json()
    counter.innerHTML = ` Views: ${data}`;

updateCounter()