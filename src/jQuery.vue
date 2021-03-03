<template>
  <div>
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <form>
          <input type="text" name="search" class="search" placeholder="What needs to be done" />
          <input type="text" id name style="display: none;" />
        </form>
      </header>
    </section>
    <section>
      <button class="allc">全选</button>
      <ul class="sh"></ul>
    </section>
    <section>
      <button class="allshow">all</button>
      <button class="active">Active</button>
      <button class="completed">Completed</button>
      <button class="clear" id="clear">clear completed</button>
    </section>
  </div>
</template>
<style>
ul li {
  list-style: none;
}
.clear {
  display: none;
}
</style>
<script>
import $ from "jquery";

export default {
  mounted() {
    $(".search").keyup(function(e) {
      var search = $(".search").val();
      if (search.length !== 0) {
        //ul li列表
        if (e.keyCode === 13) {
          $(
            // "<li id='li" +search +"'><input id='cbx" +search +"' name='cbx" +search +"' type='checkbox' value='" +search +"'/><label>" +search +"</label><button id='btn_des" +search +"'>删除</button></li>"
            `<li id='li${search}'><input id='cbx${search}' name='cbx${search}' type='checkbox' value='${search}'/><label>${search}</label><button id='btn_des${search}'>删除</button></li>`
          ).appendTo($("ul"));

          //li后面的btn删除
          $("#btn_des" + search).on("click", function() {
            $(this)
              .parent()
              .remove();
          });

          //回车清空内容
          $(".search").val("");

          //本地保存
          // var arr_li = document.querySelectorAll("li");
          // var num;
          // $("li")
          //   .last()
          //   .addClass("active");
          // for (var i = 0; i < arr_li.length; i++) {
          //   if (arr_li[i].className === "active") {
          //     num = i;
          //   }
          // }
          // localStorage.setItem("num", num);

          // var getNum = parseInt(localStorage.getItem("num"));
          // $("li")
          //   .eq(getNum)
          //   .addClass("active");
        }
        //clear completed出现时样式设置
        let l = $("input[type='checkbox']:checked").length;
        console.log(l);
        $("[type='checkbox'],.allc").click(function() {
          if ($("input[type='checkbox']:checked").length > 0) {
            $(".clear").css("display", "inline-block");
          } else {
            $(".clear").css("display", "none");
          }
        });
      }
    });
    /**
     * 移出其他绑定事件
     */
    //active功能
    $(".active").click(function() {
      // $("input[name='cbx" + search + "']:checked")
      $(":checked")
        .parent()
        .hide();
      $("input[type='checkbox']:not(:checked)")
        .parent()
        .show();
    });

    //completed功能
    $(".completed").click(function() {
      // $("input[name='cbx" + search + "']:checked")
      $(":checked")
        .parent()
        .show();
      $("input[type='checkbox']:not(:checked)")
        .parent()
        .hide();
    });

    //allshow功能
    $(".allshow").click(function() {
      $("input[type='checkbox']")
        .parent()
        .show();
    });

    //clear completed功能实现
    if ($("input[type='checkbox']:checked")) {
      $(".clear").click(function() {
        $("input[type='checkbox']:checked")
          .parent()
          .remove();
      });
    }

    // $(".allc").click(function() {
    //   if ($(this).attr("checked")) {
    //     $('input[type="checkbox"]').attr("checked", true);
    //   } else {
    //     $("input[type=checkbox]").attr("checked", false);
    //   }
    // });
    /**
     * TODO: bind 是一个比较老的语法了.
     * 现在的话要熟练使用 $(selector).on(eventName, callback)
     * 以后很多地方都是用 on 来 监听某个事件
     */
    //  全选/全不选
    $(".allc").on("click", function() {
      /**
       * TODO: 以后尽量采用 let. const 这两个
       * 对象 数组用 const. 确保他们的不变性
       * let 更多的是能局限在一个作用域
       * 以免变量提升污染代码块外
       * https://es6.ruanyifeng.com/#docs/let
       */
      let a = $("input[type='checkbox']");
      // console.log(a.length); //所有
      let b = $("input[type='checkbox']:checked");
      // console.log(b.length); //被选中的
      // var c = $("input[type='checkbox']:not(:checked)");
      // console.log(c.length); //未被选中的
      if (a.length > b.length) {
        $("input[type='checkbox']").prop("checked", "true");
      }
      if (a.length == b.length) {
        $("input[type='checkbox']").prop("checked", false);
      }
    });
  }
};

/**
 * TODO:
 * 了解数组的以下方法
 * const foo = [1, 2, 3, 4, 5, 6]
 * push() pop() shift() unshift() splice() sort() reverse()
 * forEach() map() filter() find() findIndex() includes()
 * fill() join() reduce()
 * 检查调用后返回什么, 以及原数组是否有变化
 * 可参考文档
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
</script>

<style scoped>
</style>