import Vue from 'vue'

// 全站共用的 function，會注入每個 component 當中
Vue.mixin({
  methods: {
    setCookie (name,value) {
        value = encodeURIComponent(JSON.stringify(value).replace(/\s/g,'+'));
        console.log(value);
        document.cookie= name+"="+value+";path=/;";
        return this.getCookie(name)
    },
    getCookie (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        let res;
        if (parts.length == 2){
            res= parts.pop().split(";").shift(); 
            return JSON.parse(decodeURIComponent(res).replace(/\+/g,' '));
        }else{
            return undefined;
        }
    }
  }
})
