<template>
  <div>
      <button @click="count++">You checked me {{count}} times.<button>
  </div>
</template>

<script>
export default {
    name:'button-counter',
    data(){
        return{
            count:0,
        }
    }
}
</script>

<style>

</style>