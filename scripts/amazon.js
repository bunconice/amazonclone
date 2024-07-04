let productsHtml= '';

products.forEach((product) => {
  productsHtml += `
  <div class="product-container">
    <div class="product-image-container">
      <img src="${product.image}" class="product-picture">
    </div>

    <div class="product-name">
      ${product.name}
    </div>

    <div class="product-ratings">
      <img src="img/ratings/rating-${product.rating.stars * 10}.png" class="rating">
      <div class="rating-count">${product.rating.count}</div>
    </div>

    <div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>

    <div class="product-quantity">
      <select class="quantity-selector-${product.id}">
        <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="add-to-cart-display">
      <img src="img/icons/checkmark.png" class="checkmark">Added
    </div>

    <button class="add-to-cart-button" data-product-id="${product.id}">
      Add to Cart
    </button>
  </div>
  `;
});

document.querySelector('.product-grid').innerHTML = productsHtml;


const allButton = document.querySelectorAll('.add-to-cart-button');

allButton.forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    let productExists = false;
    
    let selectedQuantity = document.querySelector(`.quantity-selector-${productId}`).value;
    
    selectedQuantity = Number(selectedQuantity);

    cart.forEach((item) => {
      if (item.productId === productId) {
        item.quantity += selectedQuantity;
        productExists = true;
      }
    });

    if (!productExists) {
      cart.push({
        productId: productId,
        quantity: selectedQuantity
      });
    }

    let cartQuantity = 0;

    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    document.querySelector('.cart-quantity').innerHTML = cartQuantity;

    console.log(cart);
  });
});

