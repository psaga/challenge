<template>
  <div class="panels-container">
    <div class="left-panel">
      <Operations />
      <draggable
        v-model="draggableList"
        class="draggable-list"
        handle=".draggable"
      >
        <component
          v-for="(section, index) in draggableList"
          :is="section"
          :key="index"
        />
      </draggable>
      <Widgets />
    </div>
    <div class="right-panel">
      <HeaderSection @tab-selected="onTabSelected" :activeTab="activeTab" />
      <Overview v-show="activeTab === 'Overview'" />
      <div v-show="activeTab === 'Enrollment'"></div>
      <div v-show="activeTab === 'Academic'"></div>
    </div>
  </div>
</template>
<script lang="ts" src="./index.ts" />
<style lang="scss" src="./styles.scss" scoped />
