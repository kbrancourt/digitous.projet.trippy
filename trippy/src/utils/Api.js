var config = {
  host: "http://localhost:3002",
};
class Api {
  getHomeData() {
    return fetch(`${config.host}/api/home`)
      .then((response) => response.json())
      .then((result) => {
        return result.cities;
      });
  }
}

export default new Api();
