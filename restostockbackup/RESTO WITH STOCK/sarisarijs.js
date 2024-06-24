let cart = [];

let products = {
    'Trouser Pants': { price: 2500, stock: 15 },
    'Jogger Pants': { price: 3000, stock: 15 },
    'Linen Pants': { price: 3700, stock: 15 },
    'Cigarette Pants': { price: 2000, stock: 15 },
    'Everpress Shirt': { price: 500, stock: 15 },
    'Nike Uni Sex Shirt': { price: 650, stock: 15 },
    'Puma Shirt': { price: 600, stock: 15 },
    'Reverence Crew Neck Shirt': { price: 580, stock: 15 },
    'CK One': { price: 6500, stock: 15 },
    'Bleu De Chanel': { price: 8000, stock: 15 },
    'Dior Sauvage': { price: 5500, stock: 15 },
    'Ralph Lauren Polo Blue': { price: 7500, stock: 15 },
    'Bio Fresh Sando': { price: 700, stock: 15 },
    'Fitted Halter Crop Top': { price: 300, stock: 15 },
    'Knit Tank Top': { price: 1200, stock: 15 },
    'Tie Dye Fitted Sando': { price: 900, stock: 15 },
    'Banda Gunpla Red Heresy': { price: 3500, stock: 15 },
    'Hot Wheels Tesla Roadster': { price: 499, stock: 15 },
    'LEGO Mincraft Edition': { price: 1800, stock: 15 },
    'Nerf Gun Elite': { price: 3000, stock: 15 }
};

function addToCart(itemName) {
  const quantitySpan = document.getElementById(`quantity-${itemName.replace(/\s/g, '')}`); 
  let quantity = parseInt(quantitySpan.textContent);

  if (quantity > products[itemName].stock) {
      alert("Sorry, this item is out of stock.");
      return;
  }

  products[itemName].stock -= quantity;
  const remainingStockSpan = document.getElementById(`remaining-stock-${itemName.replace(/\s/g, '')}`);
  remainingStockSpan.textContent = products[itemName].stock; 
  cart.push({ name: itemName, price: products[itemName].price, quantity: quantity });
  quantitySpan.textContent = 1; 
  displayCart(); 
}



function incrementQuantity(itemName) {
    const quantitySpan = document.getElementById(`quantity-${itemName.replace(/\s/g, '')}`); 
    let quantity = parseInt(quantitySpan.textContent);

    if (quantity < products[itemName].stock) {
        quantity++;
        quantitySpan.textContent = quantity;
    }
}

function decrementQuantity(itemName) {
    const quantitySpan = document.getElementById(`quantity-${itemName.replace(/\s/g, '')}`); 
    let quantity = parseInt(quantitySpan.textContent);

    if (quantity > 1) {
        quantity--;
        quantitySpan.textContent = quantity;
    }
}


function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      const formattedItemTotal = itemTotal.toLocaleString();
      
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerText = `${item.name} x${item.quantity} - PHP ${formattedItemTotal}`;
      
      cartItemsDiv.appendChild(cartItem);
    });
    
    const formattedTotal = total.toLocaleString();
    document.getElementById('cart-total').innerText = formattedTotal;
  }
  

    function filterProducts(category) {
      const products = document.querySelectorAll('.product');
      products.forEach(product => {
        if (product.classList.contains(category.toLowerCase())) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    }

    function showAllProducts() {
      const products = document.querySelectorAll('.product');
      products.forEach(product => {
        product.style.display = 'block';
      });
    }
	
	function generateNewOrder() {
    cart = [];
    displayCart();

    alert("Preparation for your order is in progress!");
}


function calculateExchange() {
  // Get the total amount from the cart
  const total = parseInt(document.getElementById('cart-total').innerText.replace(/,/g, ''));

  // Get the payment amount entered by the user
  const paymentInput = document.getElementById('payment');
  const paymentAmount = parseInt(paymentInput.value);

  // Calculate the exchange
  const exchange = paymentAmount - total;

  // Display the exchange in an alert
  if (!isNaN(exchange) && exchange >= 0) {
      alert(`Thank you for your purchase! Your change is PHP ${exchange.toLocaleString()}`);
      generateNewOrder(); // Optionally reset the cart after placing the order
  } else {
      alert('Please enter a valid payment amount.');
  }
}
