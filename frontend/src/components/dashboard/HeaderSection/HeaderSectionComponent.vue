<template>
  <div class="header">
    <div class="title">
      <span>Record Details / {{ studentData.id }}</span>
      <span class="icon">
        <IconAppRegistration />
      </span>
    </div>
    <div class="models">
      <span
        class="tab"
        :class="{ active: activeTab === tab }"
        :key="index"
        v-for="(tab, index) in tabs"
        @click="selectTab(tab)"
        >{{ tab }}</span
      >
    </div>
  </div>
</template>
<style lang="scss" src="./styles.scss" scoped />
<script lang="ts" src="./index.ts" />
