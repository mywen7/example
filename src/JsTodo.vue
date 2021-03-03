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

<script>
export default {
  data() {
    return{
      
    }
  }
}
</script>

<style>

</style>