let cartCount = 0;

const cart = document.getElementById("cart");
const buttons = document.querySelectorAll(".add");

// Add to cart
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        cartCount++;
        cart.textContent = `Cart (${cartCount})`;

        btn.textContent = "Added ✓";
        btn.style.background = "#4CAF50";
        btn.style.color = "white";

        setTimeout(() => {
            btn.textContent = "Add to Cart";
            btn.style.background = "#ffd814";
            btn.style.color = "black";
        }, 1000);
    });
});

// Scroll to products
document.getElementById("shopBtn").addEventListener("click", () => {
    document.querySelector(".products").scrollIntoView({
        behavior: "smooth"
    });
});