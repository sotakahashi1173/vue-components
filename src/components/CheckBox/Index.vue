<template>
  <label :class="$style.checkbox">
    <input type="checkbox" :class="[$style.input]" checked />
    <sapn :class="[$style.text]">
      <slot />
    </sapn>
  </label>
</template>
<script setup lang="ts"></script>

<style scoped module lang="scss">
$theme-color: rgb(0, 196, 204);
.checkbox {
  position: relative;
  display: inline-flex;
  position: absolute;
  align-items: center;
  cursor: pointer;
}
.input {
  appearance: none;
  height: 1.6rem;
  width: 0;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border: 2px solid #999;
    border-radius: 2px;
    background-color: #fff;
  }
  &:checked {
    &::before {
      background-color: $theme-color;
      border-color: $theme-color;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 12px;
      height: 4px;
      left: 3px;
      top: calc(50% - 4.5px);
      border-left: 2px solid #fff;
      border-bottom: 2px solid #fff;
      transform: rotate(-45deg);
    }
  }
}

.text {
  font-size: 1.6rem;
  padding-left: 16px;
  display: inline-block;
  color: #333;
}
</style>
