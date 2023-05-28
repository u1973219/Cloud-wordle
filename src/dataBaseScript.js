

async function createList() {
    const endpoint = '/data-api/rest/Person';
    const response = await fetch(endpoint);
    var data = await response.json();
    console.table(data.value);
}


createList();
console.table(data.value);
console.log(data.value.Name);

for (let r of data.list) {
    console.log(r.Name);
}