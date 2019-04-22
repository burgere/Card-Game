<template>
  <div id="app">
    <TableSide />
  </div>
</template>

<script>
import TableSide from "./components/TableSide";

export default {
  name: 'app',
  components: {
    TableSide
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
