import Vue from 'vue'

Vue.filter('price', (value)=>{
    return "￥"+value
})

Vue.filter('img', (value, size) => {
    return "http://pic.secoo.com/product/240/240/"+value
  })