
<template>
  <div>
    <button @click="changeNumber">点击</button>
    <div>{{even}}</div>
    <div>{{odd}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      odd: " ",
      even: " "
    }
  },
  methods:{
    changeNumber(){
      const arrs = new Array(100).fill(0);
      // reduce()
      let aaa = arrs.reduce((total,arr)=> {
        return total = total + arr
      },450)
      console.log(aaa);
    }
  }
}
</script>

<style>

</style>