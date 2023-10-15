<template>
  <label :class="$style.radio">
    <input
      type="radio"
      name="radio"
      :value="props.value"
      :class="[$style.input]"
      v-model="selectedValue"
    />
    <sapn :class="[$style.text]">
      <slot />
    </sapn>
  </label>
</template>
<script setup lang="ts">
import { computed } from "vue";

type Props = {
  value: string;
};
const props = defineProps<Props>();
const emits = defineEmits<{ (e: "click", value: string): void }>();

const selectedValue = computed({
  get() {
    return props.value;
  },
  set(newValue) {
    return emits("click", newValue);
  },
});
</script>

<style scoped module lang="scss">
$theme-color: rgb(0, 196, 204);
.radio {
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
    width: 17px;
    height: 17px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border: 2px solid #999;
    border-radius: 50%;
    background-color: #fff;
  }
  &:checked {
    &::before {
      border-color: $theme-color;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 12px;
      height: 12px;
      left: 4.3px;
      top: 50%;
      background-color: $theme-color;
      border-radius: 50%;
      transform: translateY(-50%);
    }
  }
}

.text {
  font-size: 1.6rem;
  padding-left: 30px;
  display: inline-block;
  color: #333;
}
</style>
