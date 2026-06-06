let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToCart(product){
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(product + " added to cart!");
}

function addToWishlist(product){
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert(product + " added to wishlist!");
}

function showCart(){
    alert("Cart:\n" + cart.join("\n"));
}

function showWishlist(){
    alert("Wishlist:\n" + wishlist.join("\n"));
}
