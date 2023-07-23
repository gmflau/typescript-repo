const employee = '{"name": "Franc","department":"sales"}';
console.log(typeof employee);
let jsonObject = JSON.parse(employee);
console.log(typeof jsonObject); //object
console.log(jsonObject); //{ name: 'Franc', department: 'sales' }
console.log(jsonObject.name); // Franc
console.log(jsonObject.department); // sales
