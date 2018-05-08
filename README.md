[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/1010code/LINE-Notify-tutorial/blob/master/LICENSE)


## 流程
![](/screenshot/img01.png)

1. 用戶登記並取得 code
2. 使用第一步取得的 code 拿取權杖(Access Token)
3. 利用權杖(Access Token)發送文字訊息


## 教學
### 建立服務並取得 Client ID
使用 LINE 帳號登入成功後右上角點選進入管理登入服務，再來點選登入服務來建立你的服務。

<img src="screenshot/img02.png">

由於目前在本機端測試所以可以先隨意填寫 localhost 端口
<img src="screenshot/img03.png">

建立完成後就會取得 Client ID
<img src="screenshot/img04.png">

### 用戶登記並取得 code
- 網址夾帶參數取得 LINE Notify 授權
  - response_type
  - client_id
  - redirect_uri
  - state

```html
<!DOCTYPE html>
<html lang="tw">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script>
        function LineNotify() {
            var URL = 'https://notify-bot.line.me/oauth/authorize?';
            URL += 'response_type=code';
            URL += '&client_id=[YOUR_CLIENT_ID]';
            URL += '&redirect_uri=[YOUR_CALLBACK_URL]';
            URL += '&scope=notify';
            URL += '&state=NO_STATE';
            window.location.href = URL;
        }
    </script>
    </head>
    <body>
        <button onclick="LineNotify();"> 啟用 LineNotify </button>
    </body>
</html>
```

### 取得 code
完成後就能開啟網頁點擊按鈕取得 Line Notify code 囉！

<img src="screenshot/img05.png">
把網址列上所回傳的 code 記住我們之後會拿他來取得權杖(Access Token)。 


### 取得權杖
接下來我們使用 [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=zh-TW) 來模擬 POST 取得權杖。

[POST] https://notify-bot.line.me/oauth/token

**Body(form-data)**
|  key  |   value   |
| ----- | --------- |
| code |  lkaywNuEiYPpfrcVyBCEMg |
| grant_type | authorization_code |
| redirect_uri | http://localhost:3000/ |
| client_id | YOUR CLIENT ID |
|client_secret| YOUR CLIENT SECRET |

<img src="screenshot/img06.png">


### 傳送訊息
取得權杖後就能拿他還傳送訊息囉！

[POST] https://notify-api.line.me/api/notify

**Headers**
|  key  |   value   |
| ----- | --------- |
| Authorization |  Bearer AWHwIf7TzisK019h0m9UVSnEz2nfRTxmQB4edrgFvWz |

<img src="screenshot/img07.png">

**Body(form-data)**
|  key  |   value   |
| ----- | --------- |
| message |  Hello! |

<img src="screenshot/img08.png">

<img src="screenshot/img09.png">

<img src="screenshot/img10.png" width="300">
