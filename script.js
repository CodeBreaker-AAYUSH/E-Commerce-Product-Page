function changeImage(imageSrc) {
    document.getElementById('mainProductImage').src = imageSrc;
}

function addToCart() {
    const quantity = document.getElementById('quantity').value;
    // Implement the add to cart functionality here
    alert('Added ' + quantity + ' item(s) to cart.');
}
