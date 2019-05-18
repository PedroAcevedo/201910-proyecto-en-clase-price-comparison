const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist"));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'path/to/your/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

const server = app.listen(process.env.PORT || 5000);