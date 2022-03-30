<script setup lang="ts">
  import { QTableProps } from "quasar";
  import { getHospitals } from "@/models/hospital";
  // const fetching = ref(true);
  // const error = ref(false);

  const columns: QTableProps["columns"] = [
    {
      name: "name",
      label: "Name",
      field: "name",
      align: "left",
    },
    { name: "action", label: "Action", field: "", align: "center" },
  ];

  const { data, error, fetching } = getHospitals();
</script>

<template>
  <template v-if="error">
    <q-card-section>Unfortunately, there is an error.</q-card-section>
  </template>
  <template v-else>
    <q-table
      :columns="columns"
      :rows="data?.allHospitals"
      :loading="fetching"
      :pagination="{ rowsPerPage: 0 }"
    >
      <template #body-cell-action="props">
        <q-td :props="props">
          <q-btn
            round
            flat
            dense
            icon="info"
            text-color="black"
            :to="{
              name: 'viewHospital',
              params: { id: props.row.id },
            }"
          />
        </q-td>
      </template>
    </q-table>
  </template>
</template>

<style scoped></style>
