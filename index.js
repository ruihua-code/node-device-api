const express = require("express");
const ResponseJson = require("./httpResponse");
const { log } = require("console");
const app = express();

const Gpio = require("pigpio-mock").Gpio;

const ledGpio13 = new Gpio(13, { mode: Gpio.OUTPUT });
ledGpio13.digitalWrite(1);

console.log("当前环境:", process.env.NODE_ENV);

app.get("/gpio", (req, res) => {
  const { value } = req.query;
  const status = ledGpio13.digitalRead();
  if (Number(value) === Number(status)) {
    res.send(
      ResponseJson.error({
        message: "当前状态为已开启，不需要重复开启！",
      }).json()
    );
  } else {
    ledGpio13.digitalWrite(value);
    res.send(ResponseJson.success().json());
  }
});

app.listen(3001);
