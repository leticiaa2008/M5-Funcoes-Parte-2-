function fakeRequest(url, callback) {
    setTimeout(function() {
        callback(null, "OK");
    }, 1000);
}

fakeRequest("url1", function(error, response) {
    console.log("Primeira chamada:", response);

    fakeRequest("url2", function(error, response) {
        console.log("Segunda chamada:", response);

        fakeRequest("url3", function(error, response) {
            console.log("Terceira chamada:", response);
        });
    });
});
