export let ServiceConfig = {
    baseUrl: "http://localhost:8030/",
    metaWeather: {
      search: "weather.php?command=search&keyword={keyword}",
      location: "weather.php?command=location&woeid={woeid}",
    }
};
