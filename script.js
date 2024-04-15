function opennav() {
    let nav = document.getElementById("sidenav");
    document.getElementById("sidenav").style.width = "250px";
    
    }
    function closenav(){
    let closenav = document.getElementById("closenav");
    document.getElementById("sidenav").style.width = "0px";
    }

function favorites(){
    let favorites = document.getElementById('favorites');
    document.write("favorites");
}


// Login Form code----
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById("loginButton");
    const loginForm = document.getElementById("loginForm");

    loginButton.addEventListener("click", function() {
        loginForm.style.display = "block"; // Show the login form
    });

    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        let errors = [];

        // Validate username
        if (!username) {
            errors.push("Username is required.");
        } else if (username.length < 4) {
            errors.push("Username must be at least 4 characters long.");
        }

        // Validate password
        if (!password) {
            errors.push("Password is required.");
        } else if (password.length < 6) {
            errors.push("Password must be at least 6 characters long.");
        }

        if (errors.length > 0) {
            alert("Errors:\n" + errors.join("\n"));
        } else {
            alert("Login successful!");
            // Here you would typically handle a successful login
        }
    });
});



// main API---
let products = [];
let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
});

function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        products = data;
        displayProducts(data);
    });
}

function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    updateCartItems();
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.length;
}

function updateCartItems() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.title} - $${item.price}`;
        cartItems.appendChild(itemDiv);
    });
}

function toggleCartModal() {
    const modal = document.getElementById('cartModal');
    modal.style.display = (modal.style.display === "none" || modal.style.display === "") ? "block" : "none";
}

function searchProducts() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchText));
    displayProducts(filteredProducts);
}

