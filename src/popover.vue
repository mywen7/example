<template>
  <div>
    <div 
      v-for="(value,index) in tipList" 
      :key="index" 
      class="popopCard"
      @click="click(index)">
      <type-button 
        :title="value.title" 
        :content="value.content"
        :contentTitle="value.contentTitle"
        :tipShow="currentIndex === index"
        />
    </div>
  </div>
</template>

<script>
import TypeButton from './component/a-button.vue'
export default {
  components: {TypeButton},
  data() {
    return {
      tipList: [
        {
          title: '点我',
          contentTitle: '哈哈1',
          content: '秀儿你想说什么1'
        },
        {
          title: '我是谁',
          contentTitle: '哈哈2',
          content: '秀儿你想说什么2'
        },
        {
          title: '你管我',
          contentTitle: '哈哈3',
          content: '秀儿你想说什么3'
        },
      ],
      currentIndex: -1,
      
    }
  },
  methods: {
    click(index) {
      if(this.currentIndex === index) {
        this.currentIndex = -1;
      } else {
        this.currentIndex = index;
      }
    }
  }
}
</script>

<style>
.popopCard {
  display: inline-block;
  margin: 20px;
}
</style>