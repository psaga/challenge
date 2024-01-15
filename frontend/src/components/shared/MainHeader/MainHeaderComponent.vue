<template>
  <div class="main-header">
    <div class="left-logo">
      <img src="@/assets/logo.svg" alt="logo" height="22px" width="146px" />
    </div>
    <div class="right-avatar-icons">
      <IconLanguage />
      <IconDarkMode />
      <div class="notifications">
        <IconNotifications />
        <span class="count">{{ userData.notificationsCount }}</span>
      </div>
      <div class="profile">
        <div class="details">
          <span class="name">
            {{ userData.name }}
          </span>
          <span class="role">
            {{ userData.role }}
          </span>
        </div>
        <span class="avatar">
          <img :src="userData.avatarUrl" />
          <span class="online-dot-container">
            <span class="dot-inside"></span>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./styles.scss" scoped></style>
<script lang="ts" src="./index.ts" />
