const products = [
  {
    id: 1,
    name: "Product A",
    price: 499,
    image: "images/e-commerce.webp1.webp"
  },
  {
    id: 2,
    name: "Product B",
    price: 799,
    image: "images/shopping1.webp"
  },
  {
    id: 3,
    name: "Product C",
    price: 999,
    image: "images/shopping2.webp"
  },
  {
    id: 4,
    name: "Product D",
    price: 678,
    image: "images/shopping5.webp"
  },
  {
    id: 5,
    name: "Product E",
    price: 599,
    image: "images/shopping3.webp"
  },
   {
    id: 6,
    name: "Product F",
    price: 899,
    image: "images/shopping4.jpg"
  },
   {
    id: 7,
    name: "Product G",
    price: 799,
    image: "images/shopping6.jpg"
  },
   {
    id: 8,
    name: "Product H",
    price: 689,
    image: "images/e-commerce.webp"
  }
];

let cart = [];
let filteredProducts = [...products];

function loadProducts(productListToRender = filteredProducts) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  productListToRender.forEach(product => {
    const prod = document.createElement('div');
    prod.className = 'product';
    prod.innerHTML = `
      <a href="product.html?id=${product.id}" class="product-link">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
      </a>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id}); return false;">Add to Cart</button>
    `;
    productList.appendChild(prod);
  });
}

function filterProducts() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();

  filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );

  loadProducts(filteredProducts);
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    document.getElementById('cart-count').textContent = cart.length;
  }
}

window.onload = function () {
  filteredProducts = [...products]; 
  loadProducts();               
};

