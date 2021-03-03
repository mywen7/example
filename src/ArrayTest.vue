<template>
  <div>
    <p @click="ck">{{foo}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foo: [1, 2, 76, 3, 0, 4, 5, 56, 6, 7, 8, 9]
    };
  },
  methods: {
    ck() {
      // this.foo.push(3);//数组末尾加元素
      //   this.foo.pop(); //删除数组最后一个元素，并返回剩余元素
      //   this.foo.shift(); //删除数组第一个元素，并返回剩余值
      //   this.foo.unshift(23, "ji");//向数组开头添加元素
      //   this.foo.splice(5, 2, 23); //(index,len,[item]) index：数组开始下标,从此下标位置开始  ；len：替换/删除的长度（len为0时，可变作添加操作）  ；替换的值，删除操作的话item为空
      //   this.foo.sort((a, b) => a - b); //不传参数的话，将按字母顺序对数组中的元素进行排序,若传参，则参数是一个函数
      //   this.foo.reverse();//颠倒元素顺序
      //   forEach(...)//没有返回值，可修改原数组的情况
      //   map()返回经过处理后的新数组，不改变原数组情况
      //   filter()显示一个数组的过滤或排序副本，而不实际改变或重置原始数据
      //   find()查找目标元素，找到就返回该元素，找不到返回undefined。   对于空数组，函数是不会执行的,
      //   findIndex()查找目标元素，找到就返回元素的位置，找不到就返回-1。
      //   includes()返回一个布尔值，表示某个数组是否包含给定的值
      //   arr.fill(value, start, end),用value填充数组，填充的起始位置与结束位置（也可以不要后两个参数，默认全部填充）
      //   join()方法用于把数组中的所有元素放入一个字符串
      //   reduce()用于对数组所以元素的汇总操作，如全部相加、相乘等const nums = [10,20,30,111,222,333]
      // const nums = [10,20,30,111,222,333]
      //     let newNums=nums.reduce(function(preValue,n){
      //         return PreValue+n
      //     },0)
    }
  }
};
</script>

<style>
</style>