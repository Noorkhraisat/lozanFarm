//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/lozana-farm-form'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/lozana-farm-form/index.html'));
});

// Start the app by listening on the default Heroku port
var port = process.env.PORT || 8000;

app.listen(port, function() {
    console.log("App is running on port " + port);
});