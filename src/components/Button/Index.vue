<template>
  <button
    type="button"
    :class="{
      [$style.btn]: true,
      [$style.primary]: props.primary === 'primary',
      [$sizeStyle[size]]: true,
    }"
    :disabled="props.disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type Props = {
  primary?: string;
  disabled: boolean;
  size?: "small" | "medium" | "large";
};

const props = withDefaults(defineProps<Props>(), {
  primary: undefined,
  disabled: false,
  size: "medium",
});
</script>

<style scoped module lang="scss">
$theme-color: rgb(0, 196, 204);

.btn {
  display: inline-block;
  border: 0px solid #ccc;
  background-color: #ccc;
  border-radius: 5px;
  padding: 4px 16px;
  min-width: 100px;
  max-width: 100%;
  cursor: pointer;
  color: #333;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  transition: 0.25s;
  transition-property: background-color, border-color;
  font-size: 1.6rem;
  padding: 4px 16px;
  min-width: 100px;

  &:hover,
  &:focus {
    background-color: lighten(#ccc, 5%);
    border-color: lighten(#ccc, 5%);
  }
  &:active {
    box-shadow: none;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.5s;
  }
}
.primary {
  color: white;
  background-color: $theme-color;
  border-color: $theme-color;

  &:hover,
  &:focus {
    background-color: lighten($theme-color, 5%);
    border-color: lighten($theme-color, 5%);
  }
}
</style>
<style scoped module="$sizeStyle" lang="scss">
.small {
  font-size: 1.2rem;
  padding: 4px 8px;
  min-width: 70px;
}
.medium {
  font-size: 1.6rem;
  padding: 4px 16px;
  min-width: 100px;
}
.large {
  font-size: 2.4rem;
  padding: 12px 24px;
  min-width: 150px;
}
</style>
