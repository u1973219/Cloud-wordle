function traduirText(){
    var textInput = document.getElementById("text-to-translate").value;
    var apiKey = "948738bc08c14cb9b5af370695204fc6";
    var location = "westeurope";
    var endpoint = "https://api.cognitive.microsofttranslator.com/translate?api-version=3.@$to=es";


    var req = new XMLHttpRequest();
    req.open("POST",endpoint,true);
    req.setRequestHeader("Content-Type","application/json");
    req.setRequestHeader("Ocp-Apim-Subscription-Key", apiKey);
    req.setRequestHeader("Ocp-Apim-Subscription-Region",location);
    var resposta = JSON.parse(req.responseText);
    var resultatTraduit = response[0].translations[0].text;
    document.getElementById("text-to-translate").innerHTML = resultatTraduit;

    var data = JSON.stringify([{ "Text": textInput}]);
    req.send(data);








}