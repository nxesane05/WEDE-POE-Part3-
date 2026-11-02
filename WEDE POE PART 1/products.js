const bakeryProducts = [
{
name: "Chocolate Cake",
price: "R250"
},
{
name: "White Bread",
price: "R20"
},
{
name: "Blueberry Muffins",
price: "R18"
},
{
name: "Croissant",
price: "R15"
}
];
const container =
document.getElementById("productContainer");
bakeryProducts.forEach(product => {
const card =
document.createElement("div");
card.classList.add("product-card");
card.innerHTML = `
<h3>${product.name}</h3>
<p>${product.price}</p>
`;
container.appendChild(card);
});
