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
          v-for="section in draggableList"
          :is="section.component"
          :key="section.id"
        />
      </draggable>
      <Widgets />
    </div>
    <div class="right-panel">
      <HeaderSection @tab-selected="onTabSelected" :activeTab="activeTab" />
      <Overview v-show="activeTab === 'Overview'" />
      <div v-show="activeTab === 'Enrollment'">Enrollment Section</div>
      <div v-show="activeTab === 'Academic'">Academic Section</div>
    </div>
  </div>
</template>
<script lang="ts" src="./index.ts" />
<style lang="scss" src="./styles.scss" scoped />
