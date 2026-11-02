document
.getElementById('contactForm')
.addEventListener('submit', function(e){
e.preventDefault();
let recipient =
"info@naledibakeries.co.za";
let subject =
document.getElementById(
'messageType'
).value;
let body =
document.getElementById(
'message'
).value;
window.location.href =
`mailto:${recipient}?subject=${subject}&body=${body}`;
});