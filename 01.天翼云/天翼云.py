import requests, os


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://m.ctyun.cn/wap/main/auth/login",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Mobile Safari/537.36",
    # "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
    # "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    # "x-riskdevicesign": "1edf1803e9fa604e202115a73481c74c"
}
cookies = {
    "Hm_lvt_4b4ce93f1c92033213556e55cb65769f": "1660127031",
    "sid1": "1660127032753-54E0138B5F201F5C24E9D52CDE94E7F7",
    "sid2": "1660127032753-54E0138B5F201F5C24E9D52CDE94E7F7",
    "mvid": "7f9da141-34e8-44bc-9ef9-6bf4ed397f54",
    "Hm_lpvt_4b4ce93f1c92033213556e55cb65769f": "1660127067",
    "pvid": "4"
}
url = "https://m.ctyun.cn/account/login"

username = '416693904@qq.com'
password = 'qq111111!'

cmd = '/opt/homebrew/bin/node -e "require(\'{}\').init(\'{}\', \'{}\')"' .format('./天翼云.js', username, password)
pipeline = os.popen(cmd)
enPwd = pipeline.read().strip()
print(enPwd)

params = {
    "userName": username,
    "password": enPwd,
    "referrer": "wap",
    "mainVersion": "300031500",
    "comParam_curTime": "1660127092065",
    "isCheck": "true",
    "locale": "zh-cn"
}

response = requests.get(url, headers=headers, params=params)

print(cmd)
print(response.text)
print(response)