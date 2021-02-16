var config = {
  host: "http://localhost:3002",
};

function getHomeData() {
  return fetch(`${config.host}/api/home`)
    .then((response) => response.json())
    .then((result) => {
      return result.cities;
    });
}


export {getHomeData, config};
