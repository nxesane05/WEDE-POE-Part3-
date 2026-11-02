document
.getElementById('enquiryForm')
.addEventListener('submit', function(e){
e.preventDefault();
let quantity =
parseInt(
document.getElementById('quantity').value
);
let estimatedPrice =
quantity * 25;
document.getElementById(
'responseMessage'
).innerHTML =
`
<h3>Quotation Estimate</h3>
<p>Total Cost: R${estimatedPrice}</p>
`;
});