const BaseUrl = `https://dertzey.no/wp-json/wc/store/products?featured=true`;

fetch(BaseUrl)
    .then(response => response.json())
    .then(data => {
        const CONTAINER = document.querySelector(".featured-prods");
        CONTAINER.innerHTML = `
    <a href="shop.html">
    <div class="fepro">
        <img src="${data[0].images[0].src}">
        <h3>${data[0].name}</h3>
        <p>${data[0].description}</p>
        <p class="price">${data[0].price_html}</p>
    </div>
</a>
<a href="shop.html">
    <div class="fepro">
        <img src="${data[1].images[0].src}">
        <h3>${data[1].name}</h3>
        <p>${data[1].description}</p>
        <p class="price">${data[1].price_html}</p>
    </div>
</a>
<a href="shop.html">
    <div class="fepro">
    <img src="${data[2].images[0].src}">
        <h3>${data[2].name}</h3>
        <p>${data[2].description}</p>
        <p class="price">${data[2].price_html}</p>
    </div>
</a>`
    })
    .catch(error => {
        console.log('An error occurred:', error);
    });
