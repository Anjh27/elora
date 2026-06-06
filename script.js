```javascript
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToCart(item){
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(item + " added to cart!");
}

function addToWishlist(item){
    wishlist.push(item);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert(item + " added to wishlist!");
}

function showCart(){
    if(cart.length === 0){
        alert("Your cart is empty.");
        return;
    }

    alert("Cart:\n\n" + cart.join("\n"));
}

function showWishlist(){
    if(wishlist.length === 0){
        alert("Your wishlist is empty.");
        return;
    }

    alert("Wishlist:\n\n" + wishlist.join("\n"));
}
```
