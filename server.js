const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { join } = require("path");
require('dotenv').config()

const app = express();

app.use((req, res, next) => {        
        if (!req.secure && req.headers["x-forwarded-proto"] !== "https") {
                return res.redirect('https://' + req.get('host') + req.url);
        }
        next();
})

const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(join(__dirname, "build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/*', function (req, res) {
        res.sendFile(join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
