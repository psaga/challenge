<template>
  <Card class="about-card" title="About" closable>
    <div class="details">
      <div>
        <div>First Name:</div>
        <div>{{ studentData.firstName }}</div>
      </div>
      <div>
        <div>Last Name:</div>
        <div>{{ studentData.lastName }}</div>
      </div>
      <div class="email-container">
        <div class="label">
          <span>Email: </span>
          <span
            v-show="!editEmailMode"
            class="edit-email"
            @click="activeEmailMode"
            ><IconEdit
          /></span>
          <span v-show="editEmailMode" class="edit-email" @click="editEmail"
            ><IconDone
          /></span>
        </div>
        <div v-show="!editEmailMode" class="email">{{ studentData.email }}</div>
        <input
          ref="editEmailInput"
          v-show="editEmailMode"
          :value="studentData.email"
          v-on:blur="handleBlur"
        />
      </div>
      <div>
        <div>Country:</div>
        <div>{{ studentData.country }}</div>
      </div>
      <div>
        <div>Category:</div>
        <div>{{ studentData.category }}</div>
      </div>
    </div>
  </Card>
</template>
<style lang="scss" src="./styles.scss" scoped />
<script lang="ts" src="./index.ts" />
