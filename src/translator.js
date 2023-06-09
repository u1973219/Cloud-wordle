function traduirText() {
    var textInput = document.getElementById("text-to-translate").value;
    var apiKey = "948738bc08c14cb9b5af370695204fc6";
    var location = "westeurope";
    var endpoint = "https://api.cognitive.microsofttranslator.com/";
  
    var req = new XMLHttpRequest();
    req.open("POST", endpoint, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("Ocp-Apim-Subscription-Key", apiKey);
    req.setRequestHeader("Ocp-Apim-Subscription-Region", location);
  
    req.onreadystatechange = function () {
      if (req.readyState === 4) {
        if (req.status === 200) {
          var resposta = JSON.parse(req.responseText);
          var resultatTraduit = resposta[0].translations[0].text;
          document.getElementById("text-aplicat").innerHTML = resultatTraduit;
          console.log(resultatTraduit);
        } else {
          console.error("Error en la solicitud AJAX:", req.status);
        }
      }
    };
  
    var data = JSON.stringify([{ "Text": textInput , "TranslationLanguage": "es"}]);
    req.send(data);
  }