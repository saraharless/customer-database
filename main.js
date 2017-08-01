
const cust = customers.results;

for (var i = 0; i < cust.length; i++) {
let template =
`
<div class = "row">
<img src= ${cust[i].picture.large}>
<div class = "names">${cust[i].name.first} ${cust[i].name.last}</div>
<div class = "email">${cust[i].email}</div>
<br>
<div class = "streetaddress">${cust[i].location.street}
<div class = "streetcode">${cust[i].location.city}</div>
${cust[i].location.state} ${cust[i].location.postcode}</div>
<div class = "phone">${cust[i].phone}</div>
<br>
<div class = "ssn">${cust[i].id.value}</div>
</div>
`
let blerg = document.createElement('div');
blerg.innerHTML = template;
let contain = document.querySelector('.container');
contain.appendChild(blerg);
}
