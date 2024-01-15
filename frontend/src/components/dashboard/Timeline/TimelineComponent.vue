<template>
  <div class="timeline-container">
    <div class="header">
      <div class="title">Timeline</div>
      <div class="right-actions">
        <SelectBox class="year-select" placeholder="Year" />
        <SelectBox class="user-select" placeholder="Filter by User" />
        <InputBox class="search-input" placeholder="Search..." />
      </div>
    </div>
    <div class="content-container">
      <div class="content" v-for="(blocktime, index) in timeline" :key="index">
        <div class="blocktime">{{ blocktime.month }} {{ blocktime.year }}</div>
        <div class="updates">
          <div
            class="update-container"
            v-for="(update, indexUpdate) in blocktime.events"
            :key="indexUpdate"
          >
            <div class="icon-container">
              <span class="icon"
                ><component :is="getIcon(update.type)"></component
              ></span>
            </div>
            <div class="message">
              <div class="header-message">
                <span class="title">
                  <span class="type">{{ update.type }} </span
                  >{{ getTitle(update.type, update.source) }}
                </span>
                <span class="datetime">{{ update.dateTime }}</span>
              </div>
              <pre
                class="body">{{ update.body }}<a v-if="update.type === 'Email Sent'" :href="update.emailUrl"
                > View Email</a
              ></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="ts" src="./index.ts" />
<style type="scss" src="./styles.scss" scoped />
