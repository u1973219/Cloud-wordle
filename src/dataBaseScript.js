
var data;

async function createList() {
    const endpoint = '/data-api/rest/Person';
    const response = await fetch(endpoint);
    data = await response.json();
    console.table(data.value);
}


createList().then(function(){
    console.table(data.value);
    console.log(data.value.Name);
    document.addEventListener("DOMContentLoaded", function(event) { 
        //Do work
        var i = 1
        for (let r of data.value) {
            // console.log(r.imatge);
            // document.getElementById("ImatgeItem"+i).src = r.imatge;
            // console.log("ImatgeItem"+i);
            console.log("NomItem"+i);
            console.log(r.Name);
            console.log(document.getElementById("NomItem1").innerHTML);
            nomItem = document.getElementById("NomItem1").innerHTML = r.Name;
            document.getElementById("DescrpcioItem"+i).innerText = r.Description;
            document.getElementById("PreuItem"+i).innerText = r.Price;
            console.log(r.Name);
        }
    });
});
