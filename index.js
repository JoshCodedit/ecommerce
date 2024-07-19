import { products } from "./data/productsData.js";

const latestProducts = document.getElementById("latestProducts");
const topProducts = document.getElementById("topProducts")

document.querySelector('.toggle-button').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
  });

// renders the last 4 products from productsData //
function renderLatestProducts(products) {
  const latestItems = products.slice(-4).map(product => `
    <div class="image-container">
        <img src="${product.imgSrc}" alt="${product.alt}" />
        <p>${product.name}</p>
        <h4>${product.price}</h4>
    </div>`).join('');
  latestProducts.innerHTML = latestItems;
}

renderLatestProducts(products);

// renders the last 4 products from productsData //
function renderTopProducts(products) {
    // Sort products based on purchases in descending order
    const sortedProducts = products.sort((a, b) => b.purchases - a.purchases);
  
    // Take the top 4 products
    const topItems = sortedProducts.slice(0, 4).map(product => `
      <div class="image-container">
          <img src="${product.imgSrc}" alt="${product.alt}" />
          <p>${product.name}</p>
          <h4>${product.price}</h4>
      </div>`).join('');
    
    topProducts.innerHTML = topItems;
  }
  
  renderTopProducts(products);