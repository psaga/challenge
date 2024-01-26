<template>
  <div class="overview-container">
    <Indicators />
    <div class="tabs">
      <div
        class="tab"
        :class="{ active: tab.name === activeTab }"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = tab.name"
      >
        <span v-if="tab.icon"><component :is="tab.icon"></component></span
        >{{ tab.name }}
      </div>
    </div>
    <Timeline class="tab-content" v-show="activeTab === 'Activity'" />
    <div class="tab-content" v-show="activeTab === 'Emails'">
      Emails Section
    </div>
    <div class="tab-content" v-show="activeTab === 'Calls'">Calls Section</div>
  </div>
</template>
<script type="ts" src="./index.ts" />
<style type="scss" src="./styles.scss" scoped />
