<script setup lang="ts">
  import AppBar from "@/components/UserAppBar.vue";
  import UserSideBar from "@/components/UserSideBar.vue";
</script>

<template>
  <AppBar />
  <UserSideBar />
  <q-page-container class="bg-grey-2">
    <router-view />
  </q-page-container>
</template>

<style scoped></style>
