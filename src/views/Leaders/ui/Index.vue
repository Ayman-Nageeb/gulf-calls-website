<template>
  <div>
    <Intro />
    <div class="py-16"></div>
    <leaders-list />
    <div class="my-12"></div>
    <div class="my-12"></div>

  </div>
</template>

<script>
import Intro from "./Intro.vue";
import LeadersList from './LeadersList.vue';
export default {
  components: { Intro, LeadersList },
};
</script>

<style>
</style>