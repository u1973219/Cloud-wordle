

async function createList(endpoint, response, data) {
    endpoint = '/data-api/rest/Person';
    response = await fetch(endpoint);
    data = await response.json();
    console.table(data.value);
}

let endpoint;
let response;
let data;

createList(endpoint,response,data);

console.log(data.value);