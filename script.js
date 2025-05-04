// Initialize cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count in navbar
function updateCartCount() {
  document.getElementById('cartCount').innerText = cart.length;
}

// Add item to cart
function addToCart(productId, productName, productPrice) {
  cart.push({ id: productId, name: productName, price: productPrice });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

// Render cart items
function renderCart() {
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItemsContainer.appendChild(li);
    total += item.price;
  });
  document.getElementById('totalPrice').innerText = total.toFixed(2);
}

// Open cart modal
document.getElementById('cartBtn').addEventListener('click', () => {
  document.getElementById('cartModal').style.display = 'flex';
  renderCart();
});

// Close cart modal
document.getElementById('closeCart').addEventListener('click', () => {
  document.getElementById('cartModal').style.display = 'none';
});

// Clear cart
document.getElementById('clearCart').addEventListener('click', () => {
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
  updateCartCount();
});

// Add to cart button event listeners
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    const productId = card.dataset.id;
    const productName = card.querySelector('h3').textContent;
    const productPrice = 7; // Fixed price for all products
    addToCart(productId, productName, productPrice);
  });
});

// Initial setup
updateCartCount();
