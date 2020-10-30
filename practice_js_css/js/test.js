const fetch = require("node-fetch");

async function getEmployees() {
    let response = await fetch(`http://dummy.restapiexample.com/api/v1/employees`);
    let data = await response.json()
    return data;
}

getEmployees()
    .then((data) => { console.log(data); })
    .then(() => { console.log('DONE') }); 