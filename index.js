let baseUrl = "https://api.coinranking.com/v2/coins";
let proxyUrl = "https://cors-anywhere.herokuapp.com/";
let API_KEY = "coinrankingf33574167b8c7045dfd035381ebd119cec140eb60617e97b";

fetch(`${proxyUrl}${baseUrl}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "x-access-token": `${API_KEY}`,
    "Access-Control-Allow-Origin": "*",
  },
})
  .then((res) => {
    if (res.ok) {
      res.json().then((json) => {
        let coinsData = json.data.coins;
        if (coinsData.length > 0) {
          var cryptoCoin = "";
          coinsData.forEach((coin) => {
            cryptoCoin += `<tr>
          <td>${coin.uuid}</td>
          <td>${coin.btcPrice}</td>
          <td>${coin.rank}</td>
          <td>${coin.tier}</td>
          <td>${coin.name}</td>
          <td>$ ${Math.round(coin.price)} Bn.</td>
          <td>${coin.symbol}</td>
          </tr>`;
          });
        }
        document.getElementById("data").innerHTML = cryptoCoin;
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });
