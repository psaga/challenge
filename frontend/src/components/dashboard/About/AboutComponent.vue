<template>
  <Card class="about-card" title="About">
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
          <span>Email: </span> <span><IconEdit /></span>
        </div>
        <div class="email">{{ studentData.email }}</div>
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
