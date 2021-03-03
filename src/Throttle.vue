<template>
  <div>
    <button @click="throttle()">节流</button>
    <div  v-show="show" >{{msg}}</div>
    <button @click="debounce">防抖</button>
  </div>
</template>

<script>

/**
 * @param {Function} fn
 * @param {number} wait
 */
const throttle = function(fn, wait = 300) {
  let timer;
  return function () {
    if(timer) return;
    // const args = arguments
    timer = setTimeout(function() {
      // fn.apply(obj, args);
      // fn.apply(obj, arguments);
      // fn.call(obj, args);
      // fn.call(obj, arguments);
      fn()
      timer = null;
    }, wait);
  }
}

const obj = {
  bar: 1,
  foo: function () {
    // console.log(this, this.bar, arguments)
    // console.log(this,  arguments)
    // console.log(this)
  }
}
const a = throttle(obj.foo, 500)

setInterval(() => {
  a(333, 444)
}, 20)

export default {
  data(){
    return {
      timer: null,
      msg: '你好!',
      show: true,
      lastTime: 0,
    }
  },
  methods:{
    click(){
      this.show = !this.show
    },

    throttle(){
      if(this.timer) return ;
      this.timer = setTimeout(() => {
        this.click();
        console.log("节流")
        this.timer = null;
      }, 1000);
    },
    debounce(){
      clearTimeout(this.timer);
      this.timer = setTimeout(() =>{
        this.click();
        console.log("防抖")
        this.timer = null;
      }, 1000)
    }
  }

}
</script>

<style>

</style>