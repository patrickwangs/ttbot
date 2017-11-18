var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId:"1545039112",
  channelSecret:"a6cf4351fd215666037525277bb2a40e",
  channelAccessToken:"q0/4EYQwXDFtpM3HjxntcA48HFN/Jd/uKH1AvNqhKlhyODpzTpT9ccZcbt7a+L1HRRBbSU18ZfpWbS62YWmFLMsvmhVwveKDsHnbuM+jgXOnmCD34zSP1Q19akAnQ8TYMZShi9QDZYDznwRnb/Mi4AdB04t89/1O/w1cDnyilFU="
  });
  
  bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
