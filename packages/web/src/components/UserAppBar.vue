<script setup lang="ts">
  import { useApplicationStore } from "@/store/Application.store";
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { getSearch } from "@/models/search";

  const search = ref("");
  const showMenu = ref(false);
  const { data, error, fetching } = getSearch(search);

  //const { data, error, fetching } =
  const applicationStore = useApplicationStore();
  const { logout, toggleDrawer } = applicationStore;
  const router = useRouter();

  async function itemSelected(ConsultId: number) {
    router.push({ name: "viewConsult", params: { id: ConsultId } });
    search.value = "";
  }
  async function logoutUser() {
    logout();
    router.push({ name: "login" });
  }
</script>

<template>
  <q-header class="bg-primary text-white">
    <q-toolbar>
      <q-btn flat round icon="menu" class="" @click="toggleDrawer" />
      <q-toolbar-title shrink class="mobile-hide"> Logbook </q-toolbar-title>
      <q-input
        v-model="search"
        dark
        dense
        debounce="500"
        standout
        clearable
        placeholder="Search..."
        class="q-pl-lg col-8 col-md-4"
        @focus="showMenu = true"
      >
        <q-menu
          v-model="showMenu"
          no-focus
          fit
          auto-close
          no-parent-event
          :offset="[0, 5]"
          max-height="300px"
        >
          <q-card>
            <q-list>
              <template v-if="search && !fetching">
                <q-item
                  v-for="row in data?.search"
                  :key="row.id"
                  clickable
                  @click="itemSelected(row.id)"
                >
                  {{ row.name }} ({{ row.urn }})
                </q-item>
              </template>

              <q-item v-if="!search">Please enter a Name or URN.</q-item>
              <q-item v-if="search && fetching"> Loading...</q-item>
              <q-item v-if="search && !fetching && data?.search.length === 0"
                >No Results for "{{ search }}"</q-item
              >
            </q-list>
          </q-card>
        </q-menu>
      </q-input>
      <q-space></q-space>
      <q-btn icon="logout" flat stretch @click="logoutUser"></q-btn>
    </q-toolbar>
  </q-header>
</template>

<style scoped></style>
