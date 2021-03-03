import Vue from 'vue'
// import App from './App.vue'
// import Jquery from './jQuery'
// import ButtCount from "./component/ButtCount.vue"
// import ArrayTest from './ArrayTest'
// import App2 from './App2'
// import App3 from './App3'
// import Throttle from './Throttle'
// import Todo from './component/Todo'
// import Array from './Array'
// import popover from './popover.vue';
import Rotation from './Rotation.vue';

Vue.config.productionTip = false

new Vue({
  // render: h => h(App),
  // render: h => h(Jquery),
  // render1: h => h(ButtCount),
  // render: h => h(ArrayTest),
  // render: h => h(App2),
  // render: h => h(App3),
  // render: h => h(Todo),
  // render: h => h(Throttle),
  // render: h => h(Array),
  // render: h => h(popover),
  render: h => h(Rotation),
}).$mount('#app')