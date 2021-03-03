<template>
  <li>
    <input type="checkbox" @change="checkchange()" v-model="todo.completed" />
    <label>{{todo.text}}</label>
    <button @click="onDel()">删除</button>
  </li>
</template>

<script>
export default {
  name: "todo",

  props: {
    todo: Object
  },

  data() {
    return {};
  },
  methods: {
    checkchange() {
      this.$emit("change", this.todo);
    },
    onDel() {
      this.$emit("delete", this.todo);
    }
  }

  // async created() {
  //   window.vm = this;

  //   const { data } = await axios({
  //     url: "/api/items"
  //   });

  //   const { items } = data;
  //   items.forEach(item => {
  //     this.todos.push(item);
  //   });
  // }
};
</script>

<style>
</style>