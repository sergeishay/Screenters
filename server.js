const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { join } = require("path");

const app = express();

const port = process.env.SERVER_PORT || 3000;

app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(join(__dirname, "build")));

if(process.env.NODE_ENV === 'production') {
    app.get('/*', function (req, res) {
         res.sendFile(join(__dirname, 'build', 'index.html'));
    });
  }  

app.listen(port, () => console.log(`Server listening on port ${port}`));
