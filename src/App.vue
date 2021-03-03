<template>
  <div>
    <!-- {{msg}} -->
    <!--<p v-html="rawHtml"></p>
    <p v-bind:class="color">color..</p>
    <p v-bind:class="font">font..</p>
    <p v-bind:class="{'textColor':iscolor,'textFont':isfont}">v-bind测试</p>
    <div v-bind:style="{color:color2,fontSize:size}">style绑定</div>
    <p>{{number+1}}</p>
    <p>{{1==3? 'yes' : 'no'}}</p>
    <p>{{message.split('').reverse().join('')}}</p>
    <p v-if="seen">看见</p>
    <a v-bind:href="url" class="color1">aaa</a>
    <div @click="click1">
      <div @click.stop="click2">click me</div>
    </div>
    <h1 v-if="type=='a'">A</h1>
    <h1 v-else-if="type=='b'">b</h1>
    <h1 v-else-if="type=='c'">c</h1>
    <h1 v-else>abcd</h1>-->
    <!-- <ul>
      <li v-for="item ; index in items" :key="index">{{index}}{{item.message}}</li>
    </ul>
    <ul>
      <li v-for="value ,key in object" :key="key">{{key}}:{{item.message}}</li>
    </ul>-->
    <!-- <ul>
      <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    </ul>

    <button v-on:click="green('abc',$event)">点击我</button>
    <input v-model="message" />
    <a>{{message}}</a>
    <input type="checkbox" value="1" v-model="check" />
    <input type="checkbox" value="2" v-model="check" />
    <input type="checkbox" value="3" v-model="check" />
    <span>{{check}}</span>
    <input type="radio" value="1" v-model="pink" />
    <input type="radio" value="2" v-model="pink" />
    <input type="radio" value="3" v-model="pink" />
    <span>{{pink}}</span>-->
    <!-- <buttoncounter></buttoncounter> -->
    <ButtCount>点击</ButtCount>
  </div>
</template>

<script>
import ButtCount from "./component/ButtCount.vue";

export default {
  // props: ["name", "age"],
  data() {
    return {
      // msg: "hi vue",
      // rawHtml: '<span style="color:red;">red</span>',
      // color: "blue",
      // font: "font",
      // iscolor: false,
      // isfont: true,
      // color2: "#999",
      // size: "50px",
      // number: "12",
      // ok: 1 == 1,
      // message: "vue",
      // seen: true,
      // url: "http://www.baidu.com",
      // color1: "green",
      // type: "a",
      // items: [{ message: "1" }, { message: "2" }, { message: "3" }],
      // object: {
      //   title: "hello..",
      //   author: "jeo",
      //   published: "20xx.."
      // }
      // message: "",
      // ji: "sha",
      // check: ["4", "5"],
      // pink: "e",
    };
  },
  components: {
    ButtCount
  },
  computed: {},
  methods: {
    // click1: function() {
    //   console.log("click1");
    // },
    // click2: function() {
    //   console.log("click2");
    // },
    // green: function(str, e) {
    //   alert("jjjj");
    //   alert(this.ji);
    //   alert(str);
    //   console.log(e);
    // }
  },
  mounted() {
    window.vm = this;
  }
};
</script>
<style >
.font {
  font-family: KaiTi;
  font-size: 30px;
}
.textColor {
  color: blue;
  background: red;
}
.textFont {
  font-size: 40px;
}
.blue {
  color: blue;
}
.red {
  color: red;
  font-size: 30px;
}
.green {
  color: green;
  font-size: 30px;
}
</style>
