<template>
  <div class="card" :class="{ 'gap-xl': title }">
    <div class="header" v-if="title || closable">
      <div v-if="title">
        <span class="draggable"><IconDragIndicator /></span>
        <span class="title">{{ title }}</span>
      </div>
      <span v-if="closable" class="collapsable" @click="opened = !opened">
        <IconExpandMore v-show="!opened" />
        <IconExpandLess v-show="opened" />
      </span>
    </div>
    <div class="slot" :class="{ 'collapsed': closable && !opened }">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" src="./styles.scss" scoped />
<script lang="ts" src="./index.ts" />
