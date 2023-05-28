

async function list() {
    const endpoint = '/data-api/rest/Person';
    const response = await fetch(endpoint);
    const data = await response.json();
    console.table(data.value);
}

const endpoint = '/data-api/rest/Person';
const response = await fetch(endpoint);
const data = await response.json();

console.log(data.value);