function getQuote(){
    fetch("https://type.fit/api/quotes", {
            method: "GET",
}).then(response => {return response.json()}).then(response=>{
    // console.log(response);
    let max = response.length;
    let min = 0;
    let k = Math.floor(Math.random()*(max-min))
    // console.log(response[k]);
    var randomquote = response[k];
    if (randomquote["author"]==null){
        return getQuote();
    };
    document.getElementById("quote").innerHTML = randomquote["text"];
    document.getElementById("author").innerHTML = `BY- ${randomquote["author"]}`;
    document.getElementById("button").innerHTML = "GET ANOTHER QUOTE";
})
}
