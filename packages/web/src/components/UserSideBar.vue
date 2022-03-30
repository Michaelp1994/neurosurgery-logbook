<script setup lang="ts">
  import { useApplicationStore } from "@/store/Application.store";
  import { storeToRefs } from "pinia";
  const applicationStore = useApplicationStore();
  const { isDrawerOpen } = storeToRefs(applicationStore);
  const menuList = [
    {
      key: "dashboard",
      icon: "home",
      to: { name: "dashboard" },
      label: "Dashboard",
    },
    {
      key: "myConsults",
      icon: "table_rows",
      to: { name: "consults" },
      label: "My Consults",
    },
    {
      key: "myLogbook",
      icon: "menu_book",
      to: { name: "viewLogbook" },
      label: "My Logbook",
    },
    {
      key: "myrotations",
      icon: "loop",
      to: { name: "rotations" },
      label: "My Rotations",
    },
    {
      key: "mysupervisors",
      icon: "people",
      to: { name: "supervisors" },
      label: "My Supervisors",
    },
    {
      key: "myhospitals",
      icon: "local_hospital",
      to: { name: "hospitals" },
      label: "My Hospitals",
    },
    {
      key: "myProfile",
      icon: "account_circle",
      to: { name: "viewProfile" },
      label: "My Profile",
    },
  ];
</script>

<template>
  <q-drawer v-model="isDrawerOpen" show-if-above bordered>
    <q-scroll-area class="fit">
      <q-list>
        <template v-for="menuItem in menuList" :key="menuItem.key">
          <q-item v-ripple clickable :to="menuItem.to" exact>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
<style scoped></style>
