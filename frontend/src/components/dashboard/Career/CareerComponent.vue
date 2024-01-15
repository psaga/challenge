<template>
  <Card class="career-card" title="Career Details">
    <div class="details">
      <div class="career-name-container">
        <div>Career Name:</div>
        <SelectBox
          :options="[
            { value: studentData.career.name, label: studentData.career.name },
          ]"
        />
      </div>
      <div>
        <div>Career Id:</div>
        <div>{{ studentData.career.id }}</div>
      </div>
      <div>
        <div>Type:</div>
        <div>{{ studentData.career.type }}</div>
      </div>
      <div>
        <div>Modality:</div>
        <div>{{ studentData.career.modality }}</div>
      </div>
      <div>
        <div>Student Id:</div>
        <div>{{ studentData.id }}</div>
      </div>
      <div>
        <div>Cohort:</div>
        <div>{{ studentData.career.cohort }}</div>
      </div>
    </div>
  </Card>
</template>
<style lang="scss" src="./styles.scss" scoped></style>
<script lang="ts" src="./index.ts" />
