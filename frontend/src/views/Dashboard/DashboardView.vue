<template>
  <div class="panels-container">
    <div class="left-panel">
      <Operations />
      <Student />
      <About />
      <Career />
      <Widgets />
    </div>
    <div class="right-panel">
      <HeaderSection @tab-selected="onTabSelected" />
      <Overview v-show="activeTab === 'Overview'" />
    </div>
  </div>
</template>
<script lang="ts" src="./index.ts" />
<style lang="scss" src="./styles.scss" scoped />
