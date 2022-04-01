<script setup lang="ts">
  const menuList = [
    {
      icon: "home",
      link: { name: "PublicHome" },
      title: "HOME",
    },
    {
      icon: "home",
      link: { name: "PublicAbout" },
      title: "ABOUT",
    },
  ];
</script>

<template>
  <q-header class="bg-primary text-white">
    <q-toolbar>
      <q-toolbar-title shrink> Logbook </q-toolbar-title>
      <q-btn
        v-for="menuItem in menuList"
        :key="menuItem.title"
        stretch
        flat
        :label="menuItem.title"
        :to="menuItem.link"
      />
      <q-space />
      <q-btn label="Login" flat stretch :to="{ name: 'login' }"></q-btn>
      <q-btn label="Register" flat stretch :to="{ name: 'register' }"></q-btn>
    </q-toolbar>
  </q-header>
</template>
