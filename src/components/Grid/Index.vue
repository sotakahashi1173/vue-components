<template>
  <div :class="[$style.grid, $style.gridHeader]">
    <div v-for="header in headers">
      <div :class="[$style.boxInit, $style.header]">{{ header }}</div>
    </div>
  </div>
  <div :class="[$style.grid, $style.gridBox]" v-for="items in data">
    <div v-for="item in items">
      <div :class="[$style.boxInit, $style.box]">
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const headers = ["Last Name", "Frist Name", "sex", "age", "description"];
const data = [
  ["john", "jackson", "male", 34, "sample"],
  ["john", "jackson", "male", 34, "sample"],
];
</script>
<style module scoped lang="scss">
* {
  box-sizing: border-box;
}
.boxInit {
  display: flex;
  align-items: center;
  justify-content: left;
}
.header {
  font-size: 12px;
  color: gray;
  border-bottom: 1px solid black;
  padding: 4px;
}
.box {
  font-size: 14px;
  color: black;
  border-bottom: 1px solid darkgray;
  padding: 4px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  margin: auto;
}

.gridHeader {
  background-color: #ccc;
}
.gridBox {
  background-color: darkgray;
}
</style>
