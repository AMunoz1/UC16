/**
 * Uses AJAX to query an internet data source for zip codes
 * @param {string} zipId The element id that has the zip code
 */
function findNum() {
    // First get the zip code from the HTML textbox
    //var zip = document.getElementById().value;
    // Now make a HTTP request
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            // We got a response from the server!
            if(this.status === 200) {
                // The request was successful! 
                console.log("Successful Requst!");
                //displayPlace(this.responseText);
            } else if (this.status === 404){
                // No postal code found
                displayPlace('{ "place.text" : "none" }');
            } else {
                console.log("We have a problem...server responded with code: " + this.status);
            }
        } else {
            // Waiting for a response...
        }
    };
    // Notice how the URL is appended with the zip code
    var url = "http://numbersapi.com/random/year?json";
    httpRequest.open("GET", url, true);
    httpRequest.send();
}
/**
 * Displays the zip code place given the JSON data
 * @param {string} data JSON data representing place for given zip code
 */
function displayPlace(data){
    var place = JSON.parse(data);
    if(place.text === "none") {
        document.getElementById("place").className = "alert alert-warning";
        document.getElementById("place").innerHTML = "No place matches that zip code."        
    } else {
        document.getElementById("place").className = "alert alert-success";
        document.getElementById("place").innerHTML = place.text;
    }
}