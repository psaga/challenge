<template>
  <div class="overview-container">
    <Indicators />
    <div class="tabs">
      <div
        class="tab"
        :class="{ active: tab.name === activeTab }"
        v-for="(tab, index) in tabs"
        :key="index"
      >
        <span v-if="tab.icon"><component :is="tab.icon"></component></span
        >{{ tab.name }}
      </div>
    </div>
    <Timeline v-show="activeTab === 'Activity'" />
  </div>
</template>
<script type="ts" src="./index.ts" />
<style type="scss" src="./styles.scss" scoped />
