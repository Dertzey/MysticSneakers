fetch(`${BASEURL}${ALLPRODUCTS}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`)
  .then(response => response.json())
  .then(data => {
    const SNEAKERCONTAINER = document.querySelector(".featured-prods");

    data.forEach(data => {
      SNEAKERCONTAINER.innerHTML += `
          <a href="product-page.html?id=${data.id}">
            <div class="fepro">
              <img src="${data.images[0].src}" alt="${data.images[0].alt}">
              <h3>${data.name}</h3>
              <p>${data.description}</p>
              <p class="price">${data.price_html}</p>
            </div>
          </a>`;
    });
  })
  .catch(error => { console.log('An error occurred:', error); });

