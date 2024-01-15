<template>
  <div class="select-container">
    <select placeholder="select">
      <option v-if="placeholder" value="" disabled selected hidden>
        {{ placeholder }}
      </option>
      <option v-for="(item, index) in options" :value="item.value" :key="index">
        {{ item.label }}
      </option>
    </select>
    <span class="icon"><IconArrowDropDown /></span>
  </div>
</template>
<style lang="scss" src="./styles.scss" scoped></style>
<script lang="ts" src="./index.ts"></script>
