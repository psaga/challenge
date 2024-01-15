<template>
  <Card class="student-card" title="Sobre el estudiante">
    <div class="details">
      <div>Período: {{ studentData.periodo }}</div>
      <div>Status: {{ studentData.status }}</div>
      <div>Colegio: {{ studentData.colegio }}</div>
      <div>Mod. Adminisión: {{ studentData.modAdmision }}</div>
      <div>
        Segmento:
        {{
          "segmento" in studentData ? studentData.segmento : "Sin Información"
        }}
      </div>
      <div>
        Segmento Detalle:
        {{
          "segmentoDetalle" in studentData
            ? studentData.segmentoDetalle
            : "Sin Información"
        }}
      </div>
    </div>
    <div class="risk-details">
      <div class="title">Detalle Riesgo de Ingreso:</div>
      <div class="risks-container">
        <div
          class="risk"
          v-for="(item, index) in studentData.riesgos"
          :key="index"
        >
          <div class="course">{{ item.course }}:</div>
          <div class="info">
            <span>
              {{ "risk" in item ? item.risk : "Riesgo Sin Definir" }}
            </span>
            <span>
              (Nota: {{ "note" in item ? item.note : "Sin  Información" }})
            </span>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>
<style lang="scss" src="./styles.scss" scoped />
<script lang="ts" src="./index.ts" />
