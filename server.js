const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { join } = require("path");

const app = express();

app.use((req, res, next) => {
        console.log(req);
        
        if (!req.secure && req.headers["x-forwarded-proto"] !== "https") {
                console.log("now i am secure");
                return res.redirect('https://' + req.get('host') + req.url);
        }
        next();
})

const port = process.env.SERVER_PORT || 3000;

app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(join(__dirname, "build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/*', function (req, res) {
        res.sendFile(join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
