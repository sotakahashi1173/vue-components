<template>
  <input type="checkbox" :class="$style.toggle" />
</template>

<script setup lang="ts"></script>

<style scoped module lang="scss">
$theme-color: rgb(0, 196, 204);

.toggle {
  display: inline-block;
  appearance: none;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background-color: #ccc;
  border: 1px solid #ccc;
  cursor: pointer;
  position: relative;
  &::before {
    content: "";
    appearance: none;
    background-color: white;
    width: 26px;
    height: 26px;
    border-radius: 13px;
    cursor: pointer;
    transition: 0.3s;
    position: absolute;
    top: 1px;
    left: 31px;
  }
  &::after {
    content: "OFF";
    position: absolute;
    font-size: 12px;
    top: calc(50% - 6px);
    left: 4px;
    color: #fff;
  }
  &:checked {
    background-color: $theme-color;
    border: 1px solid $theme-color;
    &::before {
      left: 1px;
    }
    &::after {
      content: "ON";
      right: 6px;
      left: inherit;
    }
  }
}
</style>
