function ajax(obj){
    obj.method = obj.method || 'get';
    obj.data = obj.data || {};
    obj.dataType = obj.dataType || 'json';
    obj.url = obj.url || '';
    obj.success = obj.success;
    //1.创建异步对象
    let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    //2.发送请求
    function formate(obj){
        let arr = [];
        for(let key in obj){
            arr.push(key + '=' +obj[key])
        }
        return arr
    }
    let pramas = formate(obj.data);
    let url  = obj.url +"?"+ pramas;
    if(obj.method == 'get'){
        xhr.open(obj.method,url,true)
    }else{
        xhr.open(obj.method,obj.url,true)
    }
    //3.发送||提交数据
    if(obj.method == 'get'){
        xhr.setRequestHeader('Content-type','application/json;charset=utf-8');
        xhr.send(null);
    }else{
        xhr.setRequestHeader('Content-type','application/x-www-form-data;utf-8');
        xhr.send(pramas);
    }
    //注册监听函数
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status >= 200 && xhr.status < 300 || xhr.sattus == 304){
                if(obj.method == 'get'){
                    obj.success && obj.success(JSON.parse(xhr.responseText))
                }else{
                    obj.success && obj.success(xhr.responseText)
                }
            }
        }
    }
}
//点击页码时颜色的改变
function color(){
    var sp = pageSize.querySelectorAll('span')
    for(var i = 0;i < sp.length;i++){
        if(sp[i].innerHTML == t){
            sp[i].style.background = "blue";
        }else{
            sp[i].style.background = "";
        }
    }
}