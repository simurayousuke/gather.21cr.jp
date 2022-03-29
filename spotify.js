fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization":"Basic ZGRhZWZjMjkyMmQwNDhiYzhmMDQwYmY4M2I2NWRjMGQ6ZWNlNGE3OGM1MGRjNDIxYTgzYjM3NjQwYzI3NjBmYmU="
    },
    body: "grant_type=client_credentials"
    }).then(function(res) {
        console.log(res);
    }).catch(function(e) {
    console.log("fetch fail", e);
});