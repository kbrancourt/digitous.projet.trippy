var config = {
    host : "http://localhost:3002",
}

function getHomeData(){
    fetch(`${config.host}/api/home`)
    .then((response) => response.json())
    .then((result)=> {
        console.log(result)
    })
};

getHomeData()