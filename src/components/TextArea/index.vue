<template>
  <input
    :type="props.type"
    :placeholder="props.placeholder"
    :class="{ [$style.textInput]: true, [$style.error]: props.isError }"
  />
</template>
<script setup lang="ts">
type Props = {
  placeholder: string;
  type: string;
  isError: boolean;
};
const props = withDefaults(defineProps<Props>(), {
  placeholder: "",
  type: "text",
  isError: false,
});
</script>
<style scoped module lang="scss">
.textInput {
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 5px 10px;
  &::placeholder {
    color: #aaa;
  }
  &:disabled {
    border-color: #ccc;
    background-color: #f1f1f1;
  }
}
.error {
  border-color: red;
}
</style>
