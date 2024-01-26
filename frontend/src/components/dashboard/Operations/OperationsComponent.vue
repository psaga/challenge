<template>
  <Card class="operations-card">
    <div class="student">
      <img class="avatar" :src="studentData.avatarUrl" />
      <span class="details">
        <span class="name">{{
          studentData.firstName + " " + studentData.lastName
        }}</span>
        <span class="reg"
          >Reg. ID: {{ studentData.id }}
          <span
            class="copy-container"
            v-clipboard:copy="studentData.id"
            v-clipboard:success="onCopy"
            ><IconContentCopy
          /></span>
        </span>
        <span class="status">Status: {{ studentData.statusGeneral }}</span>
      </span>
    </div>
    <div class="actions">
      <IconEditNote />
      <IconChat />
      <IconToday />
      <IconEmail />
      <IconPhone />
      <IconMoreHoriz />
    </div>
  </Card>
</template>
<style lang="scss" src="./styles.scss" scoped />
<script lang="ts" src="./index.ts" />
