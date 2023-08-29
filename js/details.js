const QUERYSTRING = document.location.search;

const PARAMS = new URLSearchParams(QUERYSTRING)

const ID = PARAMS.get("id");

const URLID = BASEURL + SINGLEPRODUCT + ID;



fetch(URLID)
  .then(response => response.json())
  .then(data => {
    const PRODUCTCONTAINER = document.querySelector(".product-detail");
    PRODUCTCONTAINER.innerHTML = `
    <div class="fepro">
        <img src="${data.images[0].src}">
        <h3>${data.name}</h3>
        <p>${data.description}</p>
        <p class="price">${data.price_html}</p>
    </div>`;
      document.title = `${data.title}`;
  })
  .catch(error => { console.log('An error occurred:', error);
  });