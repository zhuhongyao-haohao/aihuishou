import {fetch as fetchPro} from "whatwg-fetch";
import qs from "qs";

        
//不写方式时,是默认get请求的
const get = (url,data)=>{
    if(data){
        var str = "";
        //遍历对象,key是username,data[key]是zhy
        for(var key in data){
            str += "&" + key + "=" + data[key];
        }
        url = url + "?" +str.slice(1);
    }
    var result = fetchPro(url,{
        //跨域请求时带cookie
        credentials: "include",
        headers:{
            "content-type": "application/json"
        }
    }).then(res=>res.json());
    return result;
}

const post = (url,data)=>{
    var result = fetchPro(url,{
        method:"post",
        credentials: "include",
        headers:{
            "content-type": "application/x-www-form-urlencoded"
        },
        //qs.parse()将URL解析成对象的形式
        //qs.stringify()将对象 序列化成URL的形式，以&进行拼接
        body:qs.stringify(data)
    })
    return result;
}

export default {get,post}