const products = [
  {
    id: 1,
    name: "Product A",
    price: 499,
    image: "images/product-a.webp",
    description: "This is a great product A with amazing features."
  },
  {
    id: 2,
    name: "Product B",
    price: 799,
    image: "images/product-b.webp",
    description: "This is product B. Reliable and affordable."
  },
  {
    id: 3,
    name: "Product C",
    price: 999,
    image: "images/product-c.webp",
    description: "Premium product C for advanced users."
  }
];

function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'));
}

function loadProductDetail() {
  const productId = getProductIdFromURL();
  const product = products.find(p => p.id === productId);

  const detailDiv = document.getElementById('product-detail');
  if (!product) {
    detailDiv.innerHTML = `<p>Product not found.</p>`;
    return;
  }

  detailDiv.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h2>${product.name}</h2>
    <p>₹${product.price}</p>
    <p>${product.description}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = products.find(p => p.id === productId);
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Product added to cart!");
}

window.onload = loadProductDetail;
