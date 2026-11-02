const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', () => {
    const searchText = searchInput.value.toLowerCase();
    const products =
    document.querySelectorAll('.product-card');
    products.forEach(product => {
        const text =
        product.textContent.toLowerCase();
        if(text.includes(searchText)){
            product.style.display = "block";
        }else{
            product.style.display = "none";
        }
    });
});
