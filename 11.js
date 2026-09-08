function fakeRequest(url, callback) {
    setTimeout(function() {
        callback(null, "OK");
    }, 1000);
}

fakeRequest("https://exemplo.com", function(error, response) {
    if (error) {
        console.log("Erro:", error);
        return;
    }

    console.log(response);
});
