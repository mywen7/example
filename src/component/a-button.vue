<template>
<div class="popover">
  <div class="btn">
    {{title}}
  </div>
  <div class="content" v-if="tipShow">
    <div>
      {{contentTitle}}
    </div>
    <div>
      {{content}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TypeButton',
  props: {
    title: {
      type: String,
      default: '内容',
    },
    contentTitle: {
      type: String,
      default: '标题',
    },
    content: {
      type: String,
      default: '我是你要提示的内容'
    },
    tipShow: {
      type: Boolean,
      default: false,
    }
  },
  
}
</script>

<style>
.popover {
  cursor: pointer;
  position: relative;  
}
.btn {
  border: 1px solid #eee;
  padding: 4px 10px;
  border-radius: 5px;
}
.content {
  margin: 0 auto;
  position: absolute;
  top: 35px;
  margin-top: 10px;
  border: 1px solid #000;
  min-width: 170px;
}
</style>