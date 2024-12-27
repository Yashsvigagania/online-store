let cart = [];
let cartButton = document.getElementById('cartButton');
let cartModal = document.getElementById('cartModal');
let closeCartButton = document.getElementById('closeCartButton');
let checkoutButton = document.getElementById('checkoutButton');
let cartItemsList = document.getElementById('cartItems');
let totalPriceElement = document.getElementById('totalPrice');

const products = [
  { id: 1, name: 'Product 1', price: 20 },
  { id: 2, name: 'Product 2', price: 30 },
  { id: 3, name: 'Product 3', price: 40 }
];

// Function to update the cart display
function updateCartDisplay() {
  cartButton.textContent = `Cart (${cart.length})`;
  cartItemsList.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    let listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price}`;
    cartItemsList.appendChild(listItem);
    total += item.price;
  });

  totalPriceElement.textContent = total;
}

// Handle adding items to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (event) => {
    const productId = event.target.closest('.product').getAttribute('data-id');
    const product = products.find(p => p.id == productId);
    if (product) {
      cart.push(product);
      updateCartDisplay();
    }
  });
});

// Handle showing the cart modal
cartButton.addEventListener('click', () => {
  cartModal.style.display = 'flex';
});

// Handle closing the cart modal
closeCartButton.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

// Handle checkout (just a basic alert for now)
checkoutButton.addEventListener('click', () => {
  if (cart.length > 0) {
    alert('Proceeding to checkout...');
    cart = []; // Clear the cart
    updateCartDisplay();
    cartModal.style.display = 'none';
  } else {
    alert('Your cart is empty!');
  }
});
