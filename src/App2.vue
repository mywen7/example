<template>
  <div class="header">
    <h1>Todos</h1>
    <input
      class="new-todo"
      autofocus
      autocomplete="off"
      v-model="newTodo"
      placeholder="What needs to be done?"
      @keydown.enter="addTodo()"
    />
    <input type="button" value="全选" @click="toggle" />

    <div class="main" v-show="todos.length > 0">
      <ul>
        <!-- <todo :todo="todo" @delete @change /> -->
        <li v-for="(todo,index) in todosShow" :key="index">
          <input type="checkbox" v-model="todo.completed" @change="checkchange(todo)" />
          <label>{{ todo.text }}</label>
          <button @click="onDel(todo)">删除</button>
        </li>
      </ul>
    </div>
    <div class="footer">
      <!-- <li>
        <a href="#/all" :class="{select:type1==='all'}">all</a>
        <a href="#/activeTodos" :class="{select:type1==='activeTodos'}">Active</a>
        <a href="#/completedTodos" :class="{select:type1==='completedTodos'}">Completed</a>
      </li>-->
      <button @click="changeType(0)">all</button>
      <button @click="changeType(1)">Active</button>
      <button @click="changeType(2)">Completed</button>
      <button @click="clearAll" v-show="clearbtnshow">clear completed</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// 获取所有
// axios({
//   url: "/api/items"
// }).then(data => {
//   console.log(data);
// });
// 新增
// axios({
//   url: "/api/item",
//   method: "POST",
//   data: {
//     text: "newTodo"
//   }
// });
// 修改
// axios({
//   url: "/api/item/1",
//   method: "POST",
//   data: {
//     text: "newTodo",
//     completed: true
//   }
// });

// 删除
// axios({
//   url: "/api/item/1",
//   method: "delete",
// });

export default {
  data() {
    return {
      newTodo: "",
      types: ["all", "activeTodos", "completedTodos"],
      type: "all",
      text: "",

      flag: false,
      clearshow: 0,
      todos: [
        // { text: "fff", completed: false },
        // { text: "fff", completed: true }
      ]
    };
  },

  methods: {
    async addTodo() {
      //将数据加入到li的数组中
      if (this.newTodo.length > 0) {
        // 新增
        await axios({
          url: "/api/item",
          method: "POST",
          data: {
            text: this.newTodo
          }
        }).then(response => {
          let itemId = response.data.item.id;
          this.todos.push({
            text: this.newTodo,
            completed: false,
            id: itemId
          });
          return itemId;
        });
        this.newTodo = ""; //加入数组之后清空input框
      }
    },

    //全选切换
    toggle() {
      // console.log(this.todos);
      for (let i = 0; i <= this.todos.length - 1; i++) {
        // console.log(i, this.todos[i]);
        this.todos[i].completed = !this.flag;
      }
      this.flag = !this.flag;
    },
    //删除btn
    onDel(todo) {
      let index = this.todos.findIndex(_todo => _todo === todo);
      axios({
        url: "/api/item/" + todo.id,
        method: "delete"
      });
      this.todos.splice(index, 1);
    },
    //清除所有选中的
    async clearAll() {
      const todoCompleted = this.todos.filter(todo => todo.completed);
      // console.log("todoCompleted", todoCompleted);
      // Promise.all([])
      // Promise.race
      await Promise.all(
        todoCompleted.map(todo =>
          axios({
            url: `/api/item/${todo.id}`,
            method: "DELETE"
          })
        )
      );

      // todoCompleted.forEach(todo => {
      //   const index = this.todos.findIndex(_todo => _todo === todo);
      //   // console.log(index, todo);
      //   axios({
      //     url: "/api/item/" + todo.id,
      //     method: "delete"
      //   });
      //   this.todos.splice(index, 1);
      // });
    },
    //三种状态切换
    changeType(index) {
      this.type = this.types[index];
    },
    //选中状态监听
    checkchange(todo) {
      console.log(todo.completed);
      console.log(todo.id);
      axios({
        url: "/api/item/" + todo.id,
        method: "POST",
        data: {
          text: todo.text,
          completed: todo.completed
        }
      });
    }
  },

  computed: {
    todosShow() {
      return this[this.type];
    },
    all() {
      return this.todos;
    },
    activeTodos() {
      return this.todos.filter(todo => !todo.completed);
    },
    completedTodos() {
      return this.todos.filter(todo => todo.completed);
    },
    clearbtnshow() {
      return this.todos.filter(todo => todo.completed).length > 0;
    },
    getCompleted() {
      return this.todos.completed;
    }
  },
  watch: {
    // todos: {
    //   handler(value) {
    //     for (let i = 0; i < value.length; i++) {
    //       if (value[i].completed === true) {
    //         console.log(
    //           `${value[i].text}的完成状态为：${
    //             value[i].completed
    //           },原先的完成状态为：${!value[i].completed}`
    //         );
    //     }
    //   },
    //   deep: true
    // }

    // "todo.completed": function completed() {
    //   console.log(this.todo.completed);
    // }

    getCompleted(val, oldval) {
      console.log(val, oldval);
    }
  },
  async created() {
    window.vm = this;

    const { data } = await axios({
      url: "/api/items"
    });

    const { items } = data;
    items.forEach(item => {
      this.todos.push(item);
    });
    // function sleep(cb) {
    //   setTimeout(() => {
    //     cb();
    //   }, 1000);
    // }
    // console.log(1);
    // 回调地狱
    // 提高可读性
    // sleep(() => {
    //   console.log(2);
    //   sleep(() => {
    //     console.log(3);
    //     sleep(() => {
    //       console.log(4);
    //     });
    //   });
    // });

    // console.log(5);
    // Promise [[value]] [[status]]
    // pengding
    // resolved
    // rejected
    // function sleep() {
    //   return new Promise(resolve => {
    //     setTimeout(() => {
    //       resolve(1);
    //       // reject("error11");
    //       // [[value]]: 1   [[status]]: resolved
    //     }, 1000);
    //   });
    // }
    // promise
    // const a = sleep()
    //   .then(data => {
    //     console.log(data);

    //     return 2;
    //   })
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(reason => {
    //     console.log("报错", reason);
    //   });
    // console.log(a);

    // async/await
    // console.log(1);
    // const index = sleep();
    // console.log(2);
    // console.log("index", index);
    // await sleep();
    // console.log(3);
  }
};
</script>

<style>
</style>