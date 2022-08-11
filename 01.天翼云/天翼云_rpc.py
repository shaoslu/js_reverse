


'''


!(function(){
    var newElement = document.createElement("script");
    newElement.setAttribute("type", "text/javascript");
    newElement.setAttribute("src", "https://sekiro.virjar.com/sekiro-doc/assets/sekiro_web_client.js");
    document.body.appendChild(newElement)
    window.enPwd = Object(u["c"]);
    window.enUname = Object(u["f"]);

    function guid() {
        function S4() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        }
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    function startSekio(){
        var client = new SekiroClient("ws://127.0.0.1:5620/business-demo/register?group=tyx&clientId=" + guid());
        client.registerAction("login",function(request, resolve,reject ){
            var username = request['username'];
            var password = request['password'];
            resolve(window.enPwd(password, window.enUname(username)))
        })
    }

    setTimeout(startSekio, 1000);
})()


'''





import requests
data = {
    "group": "tyx",
    "action": "login",
    'username':'aaaa@qq.com',
    'password': 'bbbbb'
}
res = requests.get("http://127.0.0.1:5620/business-demo/invoke", params=data )
print(res.text)
