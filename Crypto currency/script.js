var btc = document.getElementById("bitcoin");
var etc = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  method: "GET",
  headers: {},
};
$.ajax(settings).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  etc.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;
});
