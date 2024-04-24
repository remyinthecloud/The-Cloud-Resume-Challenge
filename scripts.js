window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApi = 'https://o9h7o4om9j.execute-api.us-east-1.amazonaws.com/visitorCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called by API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}