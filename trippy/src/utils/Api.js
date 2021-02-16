const config= {
    host: "http://localhost:3002"
}
getHomeData(){
    fetch("config.host/api/home")
    .then(response=> response.json)
    .then(result)
}