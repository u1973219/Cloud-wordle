
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
    
    var i = 1
    for (let r of data.value) {
        console.log(r.imatge);
        document.getElementById("ImatgeItem"+i).src = r.imatge;
        console.log("ImatgeItem"+i);
        document.getElementById("NomItem"+i).innerHTML = r.Name;
        console.log(r.Name);
    }
});