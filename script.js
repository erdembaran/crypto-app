fetch(
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Ccardano%2Cethereum%2Clitecoin%2Cdogecoin&vs_currencies=usd&include_24hr_change=true"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const container = document.querySelector(".container");

    container.innerHTML += `<div class="coin d-flex justify-content-between align-items-center ">
    <div class="coinLogo ms-2">
      <img src="images/bitcoin.png" alt="" />
    </div>
    <div class="coinName ms-2 mt-3 text-light d-flex flex-row">
      <p class="fw-bold">Bitcoin</p>
      <span>/USD</span>
    </div>
    <div class="coinPrice text-light ms-auto me-2 d-flex flex-column">
      <p class="price fw-bold">$${data.bitcoin.usd}</p>
      <span class="change">${data.bitcoin.usd_24h_change.toFixed(5)}</span>
    </div>
  </div>
  
  
  <div class="coin d-flex justify-content-between align-items-center">
    <div class="coinLogo ms-2">
      <img src="images/cardano.png" alt="" />
    </div>
    <div class="coinName ms-2 mt-3 text-light d-flex flex-row">
      <p class="fw-bold">Cardano</p>
      <span>/USD</span>
    </div>
    <div class="coinPrice text-light ms-auto me-2 d-flex flex-column">
      <p class="price fw-bold">$${data.cardano.usd.toFixed(5)}</p>
      <span class="change">${data.cardano.usd_24h_change.toFixed(5)}</span>
    </div>
  </div>
  
  
  <div class="coin d-flex justify-content-between align-items-center">
    <div class="coinLogo ms-2">
      <img src="images/dogecoin.png" alt="" />
    </div>
    <div class="coinName ms-2 mt-3 text-light d-flex flex-row">
      <p class="fw-bold">Dogecoin</p>
      <span>/USD</span>
    </div>
    <div class="coinPrice text-light ms-auto me-2 d-flex flex-column">
      <p class="price fw-bold">$${data.dogecoin.usd.toFixed(5)}</p>
      <span class="change">${data.dogecoin.usd_24h_change.toFixed(5)}</span>
    </div>
  </div>
  
  
  <div class="coin d-flex justify-content-between align-items-center">
    <div class="coinLogo ms-2">
      <img src="images/ethereum.png" alt="" />
    </div>
    <div class="coinName ms-2 mt-3 text-light d-flex flex-row">
      <p class="fw-bold">Ethereum</p>
      <span>/USD</span>
    </div>
    <div class="coinPrice text-light ms-auto me-2 d-flex flex-column">
      <p class="price fw-bold">$${data.ethereum.usd}</p>
      <span class="change">${data.ethereum.usd_24h_change.toFixed(5)}</span>
    </div>
  </div>
  
  
  <div class="coin d-flex justify-content-between align-items-center">
    <div class="coinLogo ms-2">
      <img src="images/litecoin.png" alt="" />
    </div>
    <div class="coinName ms-2 mt-3 text-light d-flex flex-row">
      <p class="fw-bold">Litecoin</p>
      <span>/USD</span>
    </div>
    <div class="coinPrice text-light ms-auto me-2 d-flex flex-column">
      <p class="price fw-bold">$${data.litecoin.usd}</p>
      <span class="change">${data.litecoin.usd_24h_change.toFixed(5)}</span>
    </div>
  </div>
  
  
  <div class="coin d-flex justify-content-between align-items-center">
    <div class="coinLogo ms-2">
      <img src="images/tether.png" alt="" />
    </div>
    <div class="coinName ms-2 mt-3 text-light d-flex flex-row">
      <p class="fw-bold">Tether</p>
      <span>/USD</span>
    </div>
    <div class="coinPrice text-light ms-auto me-2 d-flex flex-column">
      <p class="price fw-bold">$${data.tether.usd}</p>
      <span class="change">${data.tether.usd_24h_change.toFixed(2)}</span>
    </div>
  </div>`;
  });
