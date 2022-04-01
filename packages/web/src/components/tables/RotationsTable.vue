<script setup lang="ts">
  import { QTableProps } from "quasar";
  import { getRotations } from "@/models/rotation";
  import { DateTime } from "luxon";
  // const fetching = ref(true);
  // const error = ref(false);
  const columns: QTableProps["columns"] = [
    {
      name: "name",
      label: "Name",
      field: "name",
      align: "left",
    },
    {
      name: "startDate",
      label: "Start Date",
      field: "startDate",
      align: "left",
      format: (val) => DateTime.fromISO(val).toLocaleString(),
    },
    {
      name: "endDate",
      label: "End Date",
      field: "endDate",
      align: "left",
      format: (val) => DateTime.fromISO(val).toLocaleString(),
    },
    {
      name: "hospital",
      label: "Hospital",
      field: (row) => row.hospital.name,
      align: "left",
    },
    {
      name: "setLevel",
      label: "Set Level",
      field: (row) => row.setLevel.name,
      align: "left",
    },
    { name: "action", label: "Action", field: "", align: "center" },
  ];

  const { data, error, fetching } = getRotations();
</script>

<template>
  <template v-if="error">
    <q-card-section>Unfortunately, there is an error.</q-card-section>
  </template>
  <template v-else>
    <q-table
      :columns="columns"
      :rows="data?.allRotations"
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
              name: 'viewRotation',
              params: { id: props.row.id },
            }"
          />
        </q-td>
      </template>
    </q-table>
  </template>
</template>

<style scoped></style>
