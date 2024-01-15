<template>
  <div class="indicators-container">
    <div
      v-for="(indicator, index) in indicators"
      :key="index"
      class="indicator"
    >
      <div class="body">
        <span class="icon"><component :is="indicator.icon"></component></span>
        <div>
          <div class="name">
            {{ indicator.name }}
            <component
              v-if="indicator.nameIcon"
              :is="indicator.nameIcon"
            ></component>
          </div>
          <div class="status">{{ indicator.status }}</div>
        </div>
      </div>
      <div class="bottom">
        <span>{{ indicator.label }}</span>
        <span>{{ indicator.value }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./styles.scss" scoped />
<script lang="ts" src="./index.ts" />
