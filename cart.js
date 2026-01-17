// Load cart from localStorage or create empty cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart to storage
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Add item to cart
function addToCart(id, name, price, image) {
    let item = cart.find(p => p.id === id);
    
    if (item) {
        item.qty++; // increase qty
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            image: image,
            qty: 1
        });
    }

    saveCart();
    alert("Added to cart!");
}

// Remove item from cart
function removeItem(id) {
    cart = cart.filter(p => p.id !== id);
    saveCart();
    location.reload();
}

// Change quantity
function changeQty(id, amount) {
    let item = cart.find(p => p.id === id);
    if (!item) return;

    item.qty += amount;

    if (item.qty <= 0) {
        removeItem(id);
        return;
    }

    saveCart();
    location.reload();
}