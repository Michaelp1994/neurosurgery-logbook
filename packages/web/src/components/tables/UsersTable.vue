<script setup lang="ts">
  import { useAllUsersQuery } from "@/services/types.generated";

  import { QTableProps } from "quasar";

  const columns: QTableProps["columns"] = [
    {
      name: "firstName",
      label: "First Name",
      field: "firstName",
      align: "left",
    },
    { name: "lastName", label: "Last Name", field: "lastName", align: "left" },
    { name: "action", label: "Action", field: "", align: "right" },
  ];
  const { data, error } = await useAllUsersQuery();
</script>

<template>
  <template v-if="error">
    <q-card class="q-pa-md">
      <q-card-section> Oh no Error... {{ error }}</q-card-section>
    </q-card>
  </template>
  <template v-else-if="data">
    <q-table
      title="Users"
      row-key="name"
      :rows="data.allUsers"
      :columns="columns"
    >
      <template #body-cell-action="props">
        <q-td :props="props">
          <q-btn :to="{ name: 'viewConsult', params: { id: props.row.id } }">
            View
          </q-btn>
        </q-td>
      </template>
    </q-table>
  </template>
</template>

<style scoped></style>
