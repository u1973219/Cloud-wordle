

// async function createList(endpoint, response, data) {
//     endpoint = '/data-api/rest/Person';
//     response = await fetch(endpoint);
//     data = await response.json();
//     // console.table(data.value);
// }

let endpoint = '/data-api/rest/Person';;
let response = fetch(endpoint);
let data= response.json();

// createList(endpoint,response,data);

console.table(data.value);