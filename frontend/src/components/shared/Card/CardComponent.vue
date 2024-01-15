<template>
  <div class="card" :class="{ 'gap-xl': title }">
    <div class="header" v-if="title">
      <div>
        <span class="draggable"><IconDragIndicator /></span>
        <span class="title">{{ title }}</span>
      </div>
      <span class="collapsable">
        <IconExpandMore v-show="!opened" />
        <IconExpandLess v-show="opened" />
      </span>
    </div>
    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" src="./styles.scss" scoped />
<script lang="ts" src="./index.ts" />
