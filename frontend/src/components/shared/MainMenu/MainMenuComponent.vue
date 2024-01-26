<template>
  <div class="main-menu">
    <div class="button" :class="{ active: isActive('Dashboard') }">
      <span class="icon">
        <IconHome />
      </span>
      <span class="item-name">Dashboard</span>
    </div>
    <div class="report-section">
      <span class="title">
        <span class="expanded">REPORTS</span>
        <span class="collapsed"><IconMoreHoriz /></span>
      </span>
      <div
        v-for="(item, index) in reportItems"
        :key="index"
        class="section-container"
      >
        <div
          class="button"
          :class="{ active: isActive(item.name) }"
          @click="toogleItem(index)"
        >
          <span class="icon">
            <component :is="item.component"></component>
          </span>
          <span class="item-name">{{ item.name }}</span>
          <span class="chevron-container" v-if="item.subItems">
            <IconExpandMore v-show="index !== openedComponentIndex" />
            <IconExpandLess v-show="index === openedComponentIndex" />
          </span>
        </div>
        <div v-show="openedComponentIndex === index" class="subitems-container">
          <li
            class="subitem-name"
            :key="indexSubItem"
            v-for="(subItem, indexSubItem) in item.subItems"
          >
            {{ subItem.name }}
          </li>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./styles.scss" scoped />
<script lang="ts" src="./index.ts" />
