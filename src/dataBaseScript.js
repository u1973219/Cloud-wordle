
var data;

async function createList() {
    const endpoint = '/data-api/rest/Person';
    const response = await fetch(endpoint);
    data = await response.json();
}


createList().then(function(){
    console.table(data.value);
    var i = 1
    for (let r of data.value) {
        document.getElementById("ImatgeItem"+i).src = r.imatge;
        nomItem = document.getElementById("NomItem"+i).innerHTML = r.Name;
        document.getElementById("DescrpcioItem"+i).innerText = r.Description;
        document.getElementById("PreuItem"+i).innerText = r.Price;
        document.getElementById("EstacioItem"+i).innerText = r.Season;
        i+=1;
    }
});
