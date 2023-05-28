
var endpoint;
var response;
var data;

async function createList() {
    endpoint = '/data-api/rest/Person';
    response = await fetch(endpoint);
    data = await response.json();
    // console.table(data.value);
}


createList();

console.table(data.value.Name);