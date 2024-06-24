document.addEventListener('DOMContentLoaded', function() {
    const stockItemsDiv = document.getElementById('stock-items');
    
    Object.keys(products).forEach(productName => {
      const product = products[productName];
      
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      
      const productImage = document.createElement('img');
      productImage.src = `images/${productName.replace(/\s/g, '').toLowerCase()}.png`;
      productImage.alt = productName;
      productImage.classList.add('product-image');
      
      const productNameElement = document.createElement('h2');
      productNameElement.textContent = productName;
      
      const remainingStock = document.createElement('p');
      remainingStock.classList.add('remaining-stock-label');
      remainingStock.innerHTML = `Remaining Stock: <span id="remaining-stock-${productName.replace(/\s/g, '')}">${product.stock}</span>`;
      
      const addStockContainer = document.createElement('div');
      addStockContainer.classList.add('add-stock-container');
      
      const addStockInput = document.createElement('input');
      addStockInput.type = 'number';
      addStockInput.min = 1;
      addStockInput.value = 1;
      addStockInput.id = `add-stock-${productName.replace(/\s/g, '')}`;
      
      const addStockButton = document.createElement('button');
      addStockButton.textContent = 'Add Stock';
      addStockButton.onclick = () => addStock(productName);
      
      addStockContainer.appendChild(addStockInput);
      addStockContainer.appendChild(addStockButton);
      
      productDiv.appendChild(productImage);
      productDiv.appendChild(productNameElement);
      productDiv.appendChild(remainingStock);
      productDiv.appendChild(addStockContainer);
      
      stockItemsDiv.appendChild(productDiv);
    });
  });
  
  function addStock(productName) {
    const addStockInput = document.getElementById(`add-stock-${productName.replace(/\s/g, '')}`);
    const stockToAdd = parseInt(addStockInput.value);
    
    if (stockToAdd > 0) {
      products[productName].stock += stockToAdd;
      
      const remainingStockSpan = document.getElementById(`remaining-stock-${productName.replace(/\s/g, '')}`);
      remainingStockSpan.textContent = products[productName].stock;
      
      addStockInput.value = 1;  // Reset the input field to 1
    } else {
      alert('Please enter a valid number of stocks to add.');
    }
  }
  