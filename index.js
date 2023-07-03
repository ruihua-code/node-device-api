const express = require("express");
const { log } = require("console");
const app = express();

const zrhGpio = require("./zrhGpio");

log("当前环境:", process.env.NODE_ENV);

app.use("/gpio", zrhGpio);


app.listen(3001);
