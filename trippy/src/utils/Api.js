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

<<<<<<< HEAD
export default new Api();
=======
getHomeData()
>>>>>>> b3697f19f38a74fa8ada818159a630f878d4b66c
