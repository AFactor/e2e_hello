var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;




app.get("/hello", function(request, response) {
    response.send({"hello": "world"})
});

app.listen(port);
