import { calculateGameScore } from "./calculator";
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/calculate',(req, res) => {
    const frames = req.body.frames;
    const scores = calculateGameScore(frames)
    res.send({ scores })
})


app.listen(PORT, () => console.log(`Bowling calculator endpoint running on port ${PORT}`));
