fetch(`${BASEURL}${ALLPRODUCTS}?consumer_key=ck_25b078f4a8e1d2f83bc9f5c24b2d2718f5e05f20&consumer_secret=cs_25271461c2e3eb451d77951e16988bc22c626108`)
  .then(response => response.json())
  .then(data => {
    const SNEAKERCONTAINER = document.querySelector(".featured-prods");

    data.forEach(product => {
      SNEAKERCONTAINER.innerHTML += `
          <a href="product-page.html?id=${product.id}">
            <div class="fepro">
              <img src="${product.images[0].src}" alt="${product.images[0].alt}">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <p class="price">${product.price_html}</p>
            </div>
          </a>`;
    });
  })
  .catch(error => { console.log('An error occurred:', error); });


