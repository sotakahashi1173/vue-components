<template>
  <div :class="$style.serchInput">
    <TextInput :class="$style.textInput" :placeholder="placeholder" />
    <Button :class="$style.btn" primary="primary">Serch</Button>
  </div>
</template>
<script setup lang="ts">
import TextInput from "../TextArea/index.vue";
import Button from "../Button/index.vue";

const placeholder = "検索してください";
</script>
<style module scoped lang="scss">
.serchInput {
  display: flex;
  align-items: center;
  position: relative;
}
.textInput {
  margin-right: 5px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
}

.btn {
  padding: 5px;
  font-size: 1.4rem;
  min-width: auto;
}
</style>
